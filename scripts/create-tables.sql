-- MySQL Database Schema for Axela Business Agency
-- Run this script to create all required tables

CREATE DATABASE IF NOT EXISTS axela_db;
USE axela_db;

-- Logos table
CREATE TABLE IF NOT EXISTS logos (
  id VARCHAR(255) PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  imageUrl TEXT,
  link VARCHAR(255) NOT NULL,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  INDEX idx_isActive (isActive)
);

-- Menu items table
CREATE TABLE IF NOT EXISTS menu_items (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  href VARCHAR(255) NOT NULL,
  `order` INT DEFAULT 0,
  isActive BOOLEAN DEFAULT TRUE,
  isExternal BOOLEAN DEFAULT FALSE,
  icon VARCHAR(100),
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  INDEX idx_isActive (isActive),
  INDEX idx_order (`order`)
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id VARCHAR(255) PRIMARY KEY,
  icon VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  `order` INT DEFAULT 0,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  INDEX idx_isActive (isActive),
  INDEX idx_order (`order`)
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  imageUrl TEXT NOT NULL,
  socialLinks JSON,
  `order` INT DEFAULT 0,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  INDEX idx_isActive (isActive),
  INDEX idx_order (`order`)
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  imageUrl TEXT NOT NULL,
  description TEXT,
  `order` INT DEFAULT 0,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  INDEX idx_isActive (isActive),
  INDEX idx_order (`order`)
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  imageUrl TEXT NOT NULL,
  date VARCHAR(100) NOT NULL,
  content TEXT,
  author VARCHAR(255),
  `order` INT DEFAULT 0,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  INDEX idx_isActive (isActive),
  INDEX idx_order (`order`)
);

-- Client logos table
CREATE TABLE IF NOT EXISTS client_logos (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  imageUrl TEXT,
  link VARCHAR(255),
  `order` INT DEFAULT 0,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  INDEX idx_isActive (isActive),
  INDEX idx_order (`order`)
);

-- Hero section table
CREATE TABLE IF NOT EXISTS hero_section (
  id VARCHAR(255) PRIMARY KEY,
  headline TEXT NOT NULL,
  subheadline TEXT NOT NULL,
  backgroundImageUrl TEXT NOT NULL,
  ctaText VARCHAR(255) NOT NULL,
  ctaLink VARCHAR(255) NOT NULL,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);

-- About section table
CREATE TABLE IF NOT EXISTS about_section (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  features JSON,
  ceoName VARCHAR(255) NOT NULL,
  ceoRole VARCHAR(255) NOT NULL,
  ceoImageUrl TEXT NOT NULL,
  ceoPhone VARCHAR(100) NOT NULL,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);

-- Statistics table
CREATE TABLE IF NOT EXISTS statistics (
  id VARCHAR(255) PRIMARY KEY,
  number VARCHAR(50) NOT NULL,
  label VARCHAR(255) NOT NULL,
  `order` INT DEFAULT 0,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  INDEX idx_isActive (isActive),
  INDEX idx_order (`order`)
);

-- Footer table
CREATE TABLE IF NOT EXISTS footer (
  id VARCHAR(255) PRIMARY KEY,
  description TEXT NOT NULL,
  services JSON,
  officeAddress TEXT NOT NULL,
  officePhone VARCHAR(100) NOT NULL,
  socialLinks JSON,
  copyright VARCHAR(255) NOT NULL,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);

-- Appointments table (for form submissions)
CREATE TABLE IF NOT EXISTS appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  ip VARCHAR(100),
  createdAt DATETIME NOT NULL,
  INDEX idx_email (email),
  INDEX idx_createdAt (createdAt)
);

-- Subscriptions table (for newsletter)
CREATE TABLE IF NOT EXISTS subscriptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  ip VARCHAR(100),
  userAgent TEXT,
  createdAt DATETIME NOT NULL,
  INDEX idx_email (email),
  INDEX idx_createdAt (createdAt)
);


