# 해야 할 것들 
* 사용자 관리

# 사용자 관리
* 이메일에 의한 생성, 각 벤더들의 제휴 방식(oauth)으로 나누어 질 수 있다.
* fireconsole 에서도 사용 관리기능 제공.
* 사용자가 다른 인증 제공업체를 통해 동일한 이메일 주소를 사용하여 여러 계정을 만들 수 없습니다.(이게 기본. 변경할 수 있는 듯?)
* 일반 적으로 값을 가져오거나 할 때, 직접 값을 가져오는 방법 보다 이벤트 지정에서 가져오는 
 방법을 추천 하는 듯 하다. 왜 일까?
* [사용자 관리 상세](https://firebase.google.com/docs/auth/web/manage-users)
* 사용자의 이메일 주소를 설정하려면 사용자가 최근에 로그인한 적이 있어야 합니다. 
* 비밀번호 재설정 이메일 발송 등의 기능도 지원한다.
 
# 비밀번호 인증 
* [firebase 비밀번호 인증](https://firebase.google.com/docs/auth/web/password-auth)
* 기본 적으로는 콘솔에서 인증 방법에 대한 설정 후 사용가능하다.   
* ex)
```javascript
 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // ...
 });
 
 firebase.auth().signOut().then(function() {
   // Sign-out successful.
 }, function(error) {
   // An error happened.
 });
```
참 쉽죠?:)
  
# Google 로그인 인증 
* [Google 로그인](https://firebase.google.com/docs/auth/web/google-signin)
* 기본 적으로 콘솔에서 설정 후, GoogleAuthProvider를 통해서 생성.
* account-exists-with-different-credential 오류 처리하기
> Firebase 콘솔에서 메일 주소당 계정 1개 설정을 켰다면 다른 Firebase 사용자의 제공업체(Google 등)에 이미 존재하는 이메일 계정으로 제공업체(Facebook 등)에 로그인하려 하면 AuthCredential 개체(Facebook 액세스 토큰)와 함께 auth/account-exists-with-different-credential 오류가 출력됩니다. 사용자가 해당 제공업체에 로그인하려면, 먼저 기존 제공업체(Facebook)에 로그인한 다음 신규 제공업체의 AuthCredential(Google ID 토큰)에 연결해야 합니다.

* 고급: 로그인 흐름 수동으로 처리하기 : 이건 일단 넘어가자.
 
# Facebook 인증 

 
# Twitter 인증 
 
# GitHub 인증 
 
# 맞춤 인증 시스템 
 
# 익명 인증 

# 여러 인증 제공 업체 연결하기  

# ??
* 이메일 발송 시 템플릿은?
* 비밀 번호 복잡성을 제어해보자 
* [에러 스터디](https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword)
* [google oath scope](https://developers.google.com/identity/protocols/googlescopes)
 
