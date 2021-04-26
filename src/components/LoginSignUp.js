import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

export default function LoginSignUp() {
    return (
      <div className="login-wrapper">
        <h1>Log In Here</h1>
        <h3>If you have an existing account...</h3>
        <form>
          <label>
            Username
            <input 
              type="text"
            />
          </label>
          <label>
            Password
            <input 
              type="password"
            />
          </label>
          <div>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
}