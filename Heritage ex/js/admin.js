import { User } from "./user.js";


export class Admin extends User {
    canEditArticles() {
        return true;
    }
}