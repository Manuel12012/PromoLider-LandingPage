import api from "../api/axios";
import type { ApplicationPayload } from "../types";

class ApplicationService {
  async create(payload: ApplicationPayload) {
    const response = await api.post("/applications", payload);

    return response.data;
  }
}

export default new ApplicationService();
