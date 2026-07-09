import { CLOUDNIARY_CONFIG } from "../config/cloudinary"
import axios from "axios"

export const uploadToCloudinary = async (image: any) => {
    try {
        const formData = new FormData()
      


        formData.append('file', {
            uri: image.uri,
            type: image.mimeType ?? 'image/jpeg',
            name: image.fileName ?? 'upload.jpg'
        } as any)

        formData.append('upload_preset', CLOUDNIARY_CONFIG.UPLOAD_PRESET)

        const resposne = await axios.post<any>(`https://api.cloudinary.com/v1_1/${CLOUDNIARY_CONFIG.CLOUD_NAME}/image/upload`,
            formData,
            // {
            //     headers: {
            //         "Content-Type": "multipart/form-data"
            //     }
            // }
        )

     
        return resposne.data;
      
    } catch (error:any) {
          console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);
  console.log("Message:", error.message);
        throw error;
    }

}