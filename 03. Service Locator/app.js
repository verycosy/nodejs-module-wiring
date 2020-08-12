// ...

const svcLoc = require("./lib/serviceLocator")();

svcLoc.register("dbName", "example-db");
svcLoc.register("tokenSecret", "SHHH!");
svcLoc.factory("db", require("./lib/db"));
svcLoc.factory("authService", require("./lib/authService"));
svcLoc.factory("authController", require("./lib/authController"));
// 로케이터에 환경 변수 및 모듈 팩토리 등록. 종속성 아직 인스턴스화되지 않음.

const authController = svcLoc.get("authController"); // 앱의 전체 종속성 그래프를 인스턴스화하는 시작점
// authController 컴포넌트의 인스턴스를 요청하면 서비스 로케이터는 자신의 인스턴스를 주입하여 관련 팩토리 호출.
// authController 팩토리가 authService 모듈을 로드하려고 시도 -> 결과적으로 db모듈 인스턴스화.

app.post("/login", authController.login);
app.get("/checkToken", authController.checkToken);

// ...
