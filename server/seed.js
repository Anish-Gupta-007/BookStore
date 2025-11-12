const express = require("express");
const bcrypt = require("bcrypt");
const adminSchema = require("./models/adminModal");
require("./db");

async function adminAccount() {
  try {
    const adminCount = await adminSchema.countDocuments();
    if (adminCount === 0) {
      const hasePassword = await bcrypt.hash("adminPassword", 10);
      const newadminSchema = await adminSchema({
        userName: "admin",
        password: hasePassword,
      });
      await newadminSchema.save();
      console.log("admin created");
    } else {
      console.log("admin a;ready esist");
    }
  } catch (err) {
    console.log("admin error", err);
  }
}

adminAccount();
