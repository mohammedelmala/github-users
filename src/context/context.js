import { createContext, useContext, useEffect, useState } from "react";
import mockUser from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import axios from "axios";
const rootUrl = "https://api.github.com";
