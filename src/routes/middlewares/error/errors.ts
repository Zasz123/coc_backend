import { ErrorNames } from "./errorNames";

import { IError } from "./interface";

const Errors: { [key in ErrorNames]: IError } = {
  Not_Found: {
    description: "not found",
    code: 404,
    message: "페이지를 찾을 수 없습니다.",
  },
  Unhandled_Error: {
    description: "unhandled error",
    code: 520,
    message: "뭔에러징;",
  },
  Not_User: {
    description: "not user",
    code: 412,
    message: "아이디 또는 비밀번호를 확인해주세요",
  },
};

export default Errors;
