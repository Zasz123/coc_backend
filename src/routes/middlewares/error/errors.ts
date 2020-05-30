import { ErrorNames } from "./errorNames";

import { IError } from "./interface";

const Errors: { [key in ErrorNames]: IError } = {
  Not_Found: {
    description: "존재하지 않는 페이지",
    code: 404,
    message: "페이지를 찾을 수 없습니다.",
  },
  Database_Error: {
    description: "데이터베이스 오류",
    code: 520,
    message: "데이터베이스 오류입니다.",
  },
  Unhandled_Error: {
    description: "알 수 없는 에러",
    code: 520,
    message: "뭔에러징;",
  },
  Not_User: {
    description: "일치하는 유저 없음",
    code: 412,
    message: "아이디 또는 비밀번호를 확인해주세요",
  },
  Token_Not_Valid: {
    description: "토큰이 없습니다.",
    code: 401,
    message: "토큰이 없음 수고",
  },
  Invalid_Body: {
    description: "요청 바디에 문제가 있습니다.",
    code: 422,
    message: "요청 바디를 확인해주세요.",
  },
};

export default Errors;
