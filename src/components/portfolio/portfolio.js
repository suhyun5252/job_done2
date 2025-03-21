import styled from "@emotion/styled";

export const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const LayerDiv = styled.div`
  max-width: 450px;
  width: 100%;
  background-color: #fff;
  min-height: 520px;
  border-radius: 12px;
  padding: 50px;
  background-color: #f3f8ff;
  border: 1px solid rgba(53, 96, 177, 0.15);
  box-shadow:
    rgba(53, 96, 177, 0.2) 0px 10px 15px -3px,
    rgba(11, 22, 41, 0.05) 0px 4px 6px -2px;
  /* * */
  em,
  h2 {
    b {
      transform: translate(1px, -4px);
      color: red;
    }
  }
  .tit {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 32px;
    color: #1b428b;
  }

  .thum-price {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    /* border: 1px solid #000; */
    strong {
      font-size: 13px;
      color: #2a58ad;
      display: block;
      width: 30px;

      display: flex;
      align-items: center;
      margin-right: 8px;
    }
    .thum {
      min-width: 80px;
      height: 80px;
      background-color: #dbebff;
      border-radius: 5px;
      label {
        position: relative;
        margin-bottom: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dbebff;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background-color: #2a58ad30;
        }
      }
      input {
        display: none;
      }
      svg {
        color: #2a58ad;
        font-size: 20px;
        /* border: 1px solid; */
      }
      em {
        width: 100%;
        font-size: 13px;
        color: #2a58ad;
        position: absolute;
        bottom: 10px;
        text-align: center;
        font-style: normal;
        opacity: 0.5;
      }
    }
    .time-price {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: calc(100% - 80px);
      input {
        text-align: right;
      }
      label {
        margin-bottom: 0;
        width: 100%;
      }
    }
  }

  label {
    position: relative;
    border: 1px solid #c6deff;
    background-color: #fff;
    display: flex;
    margin-bottom: 18px;
    border-radius: 3px;
    overflow: hidden;

    h2 {
      height: 32px;
      min-width: 60px;
      border-right: 1px solid #c6deff;
      background-color: rgb(230, 239, 255);
      font-size: 13px;
      color: #1b428b;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input {
      width: calc(100% - 65px);
      font-size: 13px;
      padding: 0 10px;
      color: #555;
    }
    #Duration {
      text-align: center;
    }
  }
  label.youtube-url {
    margin-top: 18px;
    margin-bottom: 12px;
    h2 {
      min-width: 85px;
    }
  }
  //간단설명
  .text-area {
    h2 {
      margin: 12px 0 8px;
      font-size: 14px;
      color: #1b428b;
    }
    textarea {
      border: 1px solid #c6deff;
      background-color: #fff;
      resize: none;
      width: 100%;
      height: 75px;
      font-size: 13px;
      color: #555;
      padding: 10px;
      border-radius: 3px;
      line-height: 1.18em;
      outline: none;
    }
    textarea::placeholder {
      font-weight: 300;
      color: rgba(27, 66, 139, 0.3);
    }
  }

  /* 버튼 */
  .btn-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-top: 28px;
    button {
      width: 180px;
      height: 40px;
      color: #fff;
      font-size: 14px;
      transition: all 0.3s;
      &:hover {
        opacity: 0.85;
      }
    }
    .cancel {
      background-color: #999;
    }
    .okay {
      background-color: #2a58ad;
    }
  }
  .tit-area {
    position: relative;
    .tit-error {
      position: absolute;
      left: 0;
      top: 50px !important;
    }
  }
  .error {
    color: red;
    font-size: 12px;
    position: absolute;
    /* margin-top: 4px;
    
    left: 110px;
    top: 6px; */
  }
  label .error {
    position: absolute;
    left: 67px;
    top: 9px;
  }
  .error.tit-error {
    bottom: 0px;
    top: auto;
    left: 0;
    margin: -14px 0 10px;
  }
`;
//  작업물
export const PicDiv = styled.div`
  h2 {
    display: block;
    margin: 0px 0 8px;
    font-size: 14px;
    color: #1b428b;
  }
  .pic-list {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 3%;
    li {
      width: calc(85% / 6);
      height: 49.32px;
      overflow: hidden;
      position: relative;
      border-radius: 3px;
      &.thum {
        /* border: 1px solid #000; */
        button {
          position: relative;
        }
      }

      img {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        object-fit: contain;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(195, 241, 255);
      }
      label {
        width: 100%;
        height: 100%;
        background-color: #2a58ad;
        border: transparent;
        color: #fff;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background-color: rgb(22, 164, 207);
        }
      }
      input {
        display: none;
      }
      .slot {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-color: #dbebff;
        position: relative;
      }
      .del-preview {
        position: absolute;
        top: -1px;
        right: -1px;
        background: rgba(255, 255, 255, 0.85);
        color: #333;
        border: none;
        border-radius: 50%;
        font-size: 18px;
        transition: all.3s;
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
