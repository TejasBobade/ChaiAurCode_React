import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    // create a wraper for all appwrite services , we are going to create method
    async createAccount({email, password, name}){
        try {
            // ID.unique() -> generate unique id's
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                // call another method
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            // used createEmailPasswordSession instead of createEmailPassword
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

// Created object of class
const authService = new AuthService();

// exported object directly
export default authService;