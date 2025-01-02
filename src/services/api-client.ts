import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'61c73798b3d4487cab5184690faaa28e'
    }
})