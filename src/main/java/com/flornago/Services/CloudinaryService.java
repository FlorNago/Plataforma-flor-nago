package com.flornago.Services;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.flornago.Exceptions.InternalServerError;

@Service
public class CloudinaryService {

    private Cloudinary cloudinary;

    public CloudinaryService() {

        cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dzzsfr9ff",
                "api_key", "469613247748918",
                "api_secret", "N5nza7jBi5vkhcBkRUsk7sQWuM4"));
    }

    public String uploadImage(MultipartFile file) {
        try {
            String newFileName = UUID.randomUUID() + file.getOriginalFilename();

            Map<String, Object> uploadResult = cloudinary.uploader().upload(file.getBytes(),
                    ObjectUtils.asMap("public_id", newFileName));

            String imageUrl = (String) uploadResult.get("secure_url");

            return imageUrl;
        } catch (IOException error) {
            throw new InternalServerError("Ocorreu um erro ao fazer upload da imagem.");
        }
    }

    public void removeImage(String url) {
        try {
            String publicId = extractPublicId(url);
            cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
        } catch (Exception error) {
            throw new InternalServerError("Ocorreu um erro ao remover a imagem.");
        }
    }

    private static String extractPublicId(String imageUrl) {
        Integer startIndex = imageUrl.lastIndexOf("/") + 1;
        Integer endIndex = imageUrl.lastIndexOf(".");
        return imageUrl.substring(startIndex, endIndex);
    }
}
