const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    createUser,
    login,
    getUserByUserId,
    getUsers,
    getTotalUser,
    updateUsers,
    deleteUser,
    getUserInfo,
    updateInfo,
    changePassword
} = require("./user.controller");


router.get("/", getUsers);
router.get("/infos/", checkToken, getUserInfo);
router.post("/register", createUser);
router.get("/total-user", getTotalUser);
router.get("/:id", getUserByUserId);
router.post("/login", login);
router.patch("/", updateUsers);
router.patch("/users-info", updateInfo);
router.patch("/change-password", changePassword);
router.delete("/", deleteUser);

module.exports = router;
  