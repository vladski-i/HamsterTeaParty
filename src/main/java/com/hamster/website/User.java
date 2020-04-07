package com.hamster.website;

import org.springframework.data.annotation.Id;

public class User {
    @Id
    public Integer _id;

    public String userName;

    public User() {
    }

    public Integer get_id() {
        return _id;
    }

    public void set_id(Integer _id) {
        this._id = _id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public User(Integer _id, String userName) {
        this._id = _id;
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "User{" +
                "_id=" + _id +
                ", UserName='" + userName + '\'' +
                '}';
    }
}
