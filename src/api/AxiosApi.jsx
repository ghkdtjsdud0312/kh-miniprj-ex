import axios from "axios";

const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인
  memberLogin: async (id, pw) => {
    const login = {
      id: id,
      pwd: pw,
    };
    return await axios.post(KH_DOMAIN + "/user/login"); // 벡엔드 서버가 있음을 알림
  },
};

export default AxiosApi;