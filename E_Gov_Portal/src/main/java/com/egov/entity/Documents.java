package com.egov.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
public class Documents {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String documentId;
    private String documentType;
    private String name;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "user_id", nullable = false)  
    private User uid;


    public Documents() {}

    public Documents(int id, String documentId, String documentType, String name) {
        this.id = id;
        this.documentId = documentId;
        this.documentType = documentType;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String documentId) {
        this.documentId = documentId;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getUser() {
        return uid;
    }

    public void setUser(User uid) {
        this.uid = uid;
    }

    @Override
    public String toString() {
        return "Documents [id=" + id + ", documentId=" + documentId + ", documentType=" + documentType + ", name="
                + name + ", user=" + uid + "]";
    }
}
