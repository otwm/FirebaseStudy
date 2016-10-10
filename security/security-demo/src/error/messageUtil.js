import * as error from './errorCode';

const messageUtils = {
    message(_message) {
        switch (_message) {
            case error.weakPass:
                return '패스워드가 너무 짧습니다. 6글자 이상 해주세요.';
            case error.diffPass:
                return '패스워드가 다릅니다.확인 하여 주세요.';
            case error.required:
                return '필수 값 누락';
            default:
                return _message;
        }
    }
};

export default messageUtils;