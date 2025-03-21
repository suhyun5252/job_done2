import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import DOMPurify from "dompurify";
import { EditDetailDiv } from "./companyManagement";
// import axios from "axios";
import { loginApi } from "../../../apis/login";
import { useRecoilValue } from "recoil";
import { businessDetailState } from "../../../atoms/businessAtom";
import { useNavigate } from "react-router-dom";
import { Popup } from "../../../components/ui/Popup";

function CreateDetailPage() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const quillRef = useRef(null);
  const { businessId } = useRecoilValue(businessDetailState);
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const businessDetail = useRecoilValue(businessDetailState);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // businessId 값 한번 더 확인

      await loginApi.post("/api/business/contents", {
        businessId: businessId,
        title: title,
        contents: content,
      });

      await loginApi.post(
        `/api/business/businessPicConf?businessId=${businessId}`,
      );

      // 저장 성공 후 팝업 표시
      setIsPopupOpen(true);
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
    }
  };

  // 이미지 처리
  const imageHandler = () => {
    // 1. 현재 에디터를 찾아서 참조한다.
    // useRef 로 보관한 내용물 참조(current)
    const editor = quillRef.current.getEditor();

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    input.click();

    input.addEventListener("change", async function () {
      try {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("pics", file);

        // 현재 businessId 값 확인

        // businessId가 undefined인 경우 기본값 설정
        const blobData = { businessId: businessId || 2 };

        formData.append(
          "p",
          new Blob([JSON.stringify(blobData)], {
            type: "application/json",
          }),
        );

        // axios 요청을 await로 처리
        const res = await loginApi.post(
          "/api/business/businessPicTemp",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );

        // 서버에서 받아온 이미지 URL에 프로토콜과 도메인 추가
        const tempUrl = `http://${res.data.resultData.pics[0]}`;

        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", tempUrl);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  // const handleCancel = () => {
  //   navigate("/expert/company-management");
  // };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 3, 5, 6, false] }],

          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
          ["image", "video"],
        ],
        // 이미지 관련해서는 내가 직접 처리할께.
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );
  return (
    <EditDetailDiv>
      <div className="inner">
        <h1>상세페이지 등록</h1>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <form onSubmit={handleSubmit}>
            <div className="btn-area">
              <button type="submit">저장</button>
              <button
                type="button"
                onClick={async () => {
                  await handleSubmit({ preventDefault: () => {} });
                  navigate("/expert/company-management/detail");
                }}
              >
                미리보기
              </button>
              <button
                type="button"
                onClick={() => navigate("/expert/company-management")}
              >
                취소
              </button>
            </div>
            <label>
              <span>타이틀</span>
              <input
                type="text"
                maxLength={70}
                onBlur={e => setTitle(e.target.value)}
                placeholder="회사를 소개하는 타이틀을 70자 이내로 작성해주세요."
              />
            </label>
            <ReactQuill
              ref={quillRef}
              value={content}
              onChange={setContent}
              modules={modules}
              theme="snow"
            />
          </form>
        </div>
        {/* <div>
          <h2>입력중인 데이터(서버에 보내줄 글자)</h2>
          <p>{content}</p>
          <p
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          />
        </div> */}
      </div>

      <Popup
        isOpen={isPopupOpen}
        title="알림"
        message="저장되었습니다."
        showConfirmButton={true}
        confirmLink="/expert/company-management"
        onClose={() => setIsPopupOpen(false)}
      />
    </EditDetailDiv>
  );
}

export default CreateDetailPage;
