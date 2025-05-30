import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Common
      common: {
        login: "Login",
        email: "Email",
        phone: "Phone",
        register: "Register",
        logout: "Logout",
        password: "Password",
        submit: "Submit",
        cancel: "Cancel",
        save: "Save",
        edit: "Edit",
        delete: "Delete",
        search: "Search",
        loading: "Loading...",
        doctorImage: "Doctor's Image",
        twitter: "Twitter",
        facebook: "Facebook",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        ok: "OK",
        welcome: "Welcome to Multilingual User Panel",
      },

      // Navigation
      navigation: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        profile: "Profile",
        settings: "Settings",
        items: "Items",
        gallery: "Gallery",
        doctors: "Doctors",
      },

      // Auth
      loginTitle: "Login to your account",
      registerTitle: "Create new account",
      forgotPassword: "Forgot Password?",
      rememberMe: "Remember Me",
      dontHaveAccount: "Don't have an account?",
      alreadyHaveAccount: "Already have an account?",
      signUp: "Sign Up",
      signIn: "Sign In",

      // Panel
      panelDescriptionLine1:
        "Designed based on Bootstrap 5, Sass, Gulp, and Js",
      panelDescriptionLine2: "Light, dark, and system modes",
      panelDescriptionLine3: "Dozens of validated HTML templates with W3C",
      panelDescriptionLine4: "More than 50 reusable widgets",
      panelDescriptionLine5: "Fully documented and commented source code",
      panelDescriptionLine6: "Modern and creative design",
      panelDescriptionLine7:
        "Various programs and functional elements with reusability",
      patientName: "Patient Name",
      doctor: "Doctor",
      department: "Department",
      appointmentDate: "Appointment Date",
      reason: "Reason",
      deleteAppointment: "Delete Appointment",

      // Messages
      accessDenied: "Access Denied!",
      pleaseLogin: "Please login or register first.",
      loginSuccess: "Successfully logged in!",
      registerSuccess: "Successfully registered!",
      logoutSuccess: "Successfully logged out!",
      errorOccurred: "An error occurred. Please try again.",
      deleteConfirm: {
        title: "Are you sure?",
        text: "This action cannot be undone!",
        confirm: "Yes, delete it",
        cancel: "Cancel",
      },
      deleteSuccess: {
        title: "Appointment deleted",
      },

      // Messages for SweetAlert2
      messages: {
        accessDenied: "Access Denied!",
        pleaseLogin: "Please login or register first.",
        loginSuccess: "Successfully logged in!",
        registerSuccess: "Successfully registered!",
        logoutSuccess: "Successfully logged out!",
        errorOccurred: "An error occurred. Please try again.",
        deleteConfirm: {
          title: "Are you sure?",
          text: "This action cannot be undone!",
          confirm: "Yes, delete it",
          cancel: "Cancel",
        },
        deleteSuccess: {
          title: "Appointment deleted",
        },
        profile: {
          accessDenied: "Access Denied!",
          pleaseLogin: "Please login to access your profile.",
          redirecting: "Redirecting to login page...",
        },
      },

      // About
      about: {
        title: "About Us",
        description:
          "We are committed to providing high-quality medical services and care for our patients. Our team consists of specialized doctors and experienced staff who use the latest technologies and treatment methods to provide the best care for our patients.",
        imageAlt: "Modern medical facility with state-of-the-art equipment",
        features: {
          workDayNight: {
            title: "24/7 Services",
            description: "We are ready to serve you 24 hours a day.",
          },
          emergency: {
            title: "Emergency Services",
            description:
              "Our medical team is available immediately at your location.",
          },
          dedicatedService: {
            title: "Dedicated Service",
            description:
              "We provide personalized care to meet the specific needs of each patient.",
          },
        },
      },

      // Counter
      counter: {
        doctors: "Doctors",
        departments: "Departments",
        researchLabs: "Research Labs",
        awards: "Awards",
      },

      // Service
      service: {
        title: "Comprehensive Medical Services",
        description:
          "Discover a wide range of advanced medical services designed to meet your healthcare needs. Our state-of-the-art facilities and expert medical professionals are committed to delivering exceptional care with a personal touch.",
        services: {
          hospital: {
            title: "Advanced Hospital Care",
            description:
              "Experience comprehensive medical care in our modern facility, equipped with cutting-edge technology and staffed by experienced healthcare professionals.",
          },
          pharmacy: {
            title: "Expert Pharmaceutical Services",
            description:
              "Access a wide range of medications with professional pharmaceutical guidance, ensuring safe and effective treatment at competitive prices.",
          },
          ecg: {
            title: "Precision Cardiac Diagnostics",
            description:
              "Benefit from advanced cardiac testing with state-of-the-art equipment and expert interpretation of results for accurate diagnosis.",
          },
          dnaTesting: {
            title: "Advanced Genetic Testing",
            description:
              "Access cutting-edge genetic testing services with high precision equipment and expert analysis for comprehensive genetic insights.",
          },
          disabilityCare: {
            title: "Specialized Disability Support",
            description:
              "Receive comprehensive care and rehabilitation services tailored to meet the unique needs of individuals with disabilities.",
          },
          medicalRecords: {
            title: "Secure Medical Documentation",
            description:
              "Your medical history is managed with the highest level of security and efficiency through our advanced electronic record system.",
          },
        },
      },

      // Login Component
      login: {
        title: "Login to System",
        username: "Username",
        password: "Password",
        usernamePlaceholder: "Enter your username",
        passwordPlaceholder: "Enter your password",
        captcha: {
          title: "Enter the sum",
          placeholder: "Enter the sum",
          invalid: "Invalid captcha!",
          enterSum: "Enter the sum of {{num1}} + {{num2}}",
        },
        buttons: {
          login: "Login",
          loggingIn: "Logging in...",
          register: "Register",
          forgotPassword: "Forgot Password",
        },
        messages: {
          enterCredentials: "Please enter username and password!",
          invalidCaptcha: "Invalid captcha! Please try again.",
          loginSuccess: "✅ Login successful!",
          invalidCredentials: "Invalid username or password!",
          serverError: "Server connection error",
        },
      },

      // Register Component
      register: {
        title: "Register",
        username: "Username",
        email: "Email",
        password: "Password",
        usernamePlaceholder: "Enter your username",
        emailPlaceholder: "Enter your email",
        passwordPlaceholder: "Enter your password",
        buttons: {
          register: "Register",
          registering: "Registering...",
        },
        messages: {
          fillAllFields: "Please fill in all fields!",
          invalidEmail: "Invalid email address",
          invalidPassword:
            "Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long",
          usernameTaken: "This username is already taken!",
          emailTaken: "This email is already registered!",
          registerSuccess: "Registration successful!",
          serverError: "Server connection error. Please try again!",
        },
      },

      // Appointment Component
      appointment: {
        title: "Book Appointment",
        subtitle:
          "Please fill out the form below to book a medical appointment.",
        yourName: "Your Name",
        yourEmail: "Your Email",
        phoneNumber: "Phone Number",
        selectDate: "Select Date",
        selectTime: "Select Time",
        selectTimeShort: "Time",
        selectDepartment: "Select Department",
        selectDoctor: "Select Doctor",
        notes: "Notes",
        bookAppointment: "Book Appointment",
        departments: {
          neurology: "Neurology",
          obstetrics: "Obstetrics",
          orthopedics: "Orthopedics",
          cardiology: "Cardiology",
        },
        doctors: {
          khashayar: "Dr. Khashayar Ahmadi",
          niloufar: "Dr. Niloufar Pakzad",
          parastoo: "Dr. Parastoo Haghigi",
          dariush: "Dr. Dariush Bozorgmehr",
        },
        validation: {
          fillAllFields: "Please fill in all required fields!",
          invalidPhone: "Invalid phone number!",
          invalidEmail: "Invalid email address",
          emailExists: "This email is already registered.",
          phoneExists: "This phone number is already registered.",
          invalidDate: "Please select a valid date.",
          saveError: "Error saving information",
          phoneCheckError: "Error checking phone number",
          emailCheckError: "Error checking email",
          success: "Appointment booked successfully",
        },
      },

      // Department Component
      department: {
        title: "Departments",
        description:
          "We provide comprehensive medical services to our patients using advanced equipment and qualified medical staff.",
        departments: {
          cardiology: {
            title: "Cardiology",
            description:
              "Our cardiology department provides comprehensive medical services to patients using advanced equipment and qualified medical staff. This department is equipped with modern diagnostic and treatment devices and offers the best services to patients using the latest technologies.",
          },
          neurology: {
            title: "Neurology",
            description:
              "Our neurology department provides comprehensive medical services to patients using advanced equipment and qualified medical staff. This department is equipped with modern diagnostic and treatment devices and offers the best services to patients using the latest technologies.",
          },
          hepatology: {
            title: "Hepatology",
            description:
              "Our hepatology department provides comprehensive medical services to patients using advanced equipment and qualified medical staff. This department is equipped with modern diagnostic and treatment devices and offers the best services to patients using the latest technologies.",
          },
          pediatrics: {
            title: "Pediatrics",
            description:
              "Our pediatrics department provides comprehensive medical services to patients using advanced equipment and qualified medical staff. This department is equipped with modern diagnostic and treatment devices and offers the best services to patients using the latest technologies.",
          },
          eyeCare: {
            title: "Eye Care",
            description:
              "Our eye care department provides comprehensive medical services to patients using advanced equipment and qualified medical staff. This department is equipped with modern diagnostic and treatment devices and offers the best services to patients using the latest technologies.",
          },
        },
      },

      // Home Component (English)
      home: {
        welcome: "Welcome to our website",
        welcomeSubtitle:
          "I strive to create clean, user-friendly, and professional designs that provide an excellent experience for you.",
        characteristics: "My Characteristics",
        characteristicsText:
          "Who am I? I am future-oriented and love planning for long-term goals. I am always seeking personal growth, not afraid of challenges, and fully take responsibility for my work. I am punctual, motivated, and persistent - I don't give up easily.",
        viewPortfolio: "View My Portfolio",
        contracts: "Contracts",
        contractsText:
          "I deliver projects with full commitment and on schedule, and responsibility is my top priority.",
        projects: "Projects",
        projectsText:
          "Selected projects in my learning and growth journey, focusing on clean design and user experience.",
        laboratory: "Laboratory",
        laboratoryText:
          "This is where unique ideas are explored, tested in real scenarios, and transformed into lasting, practical solutions.",
      },

      // Footer Component (English)
      footer: {
        title: "MediCare Plus",
        description:
          "We are committed to providing quality medical services and patient care. Our team consists of specialized doctors and experienced staff who use the latest technologies to ensure your well-being.",
        usefulLinks: "Useful Links",
        home: "Home",
        aboutUs: "About Us",
        services: "Services",
        termsOfService: "Terms of Service",
        privacyPolicy: "Privacy Policy",
        ourServices: "Our Services",
        cardiology: "Cardiology",
        neurology: "Neurology",
        hepatology: "Hepatology",
        pediatrics: "Pediatrics",
        eyeCare: "Eye Care",
        newsletter: "Our Newsletter",
        newsletterDescription:
          "Subscribe to our newsletter to receive updates and news about our services.",
        enterEmail: "Enter your email",
        subscribe: "Subscribe",
        copyright: "Copyright",
        allRightsReserved: "All rights reserved",
        designedBy: "Designed by",
        designerName: "Mehdi Ganji",
      },

      // Gallery
      gallery: {
        title: "Our Medical Facility",
        description:
          "Take a virtual tour of our state-of-the-art medical center. Explore our modern facilities, meet our dedicated medical team, and discover the comfortable environment we've created for your healthcare journey.",
      },

      // Contact Component (English)
      contact: {
        title: "Get in Touch",
        description:
          "We're here to help. Whether you have questions about our services, need to schedule an appointment, or want to learn more about our medical center, our team is ready to assist you. Reach out to us through any of the following channels.",
        form: {
          title: "Send Us a Message",
          description:
            "Have a question or need assistance? Fill out the form below and our team will get back to you as soon as possible.",
        },
      },
    },
  },
  fr: {
    translation: {
      // Common
      common: {
        login: "Connexion",
        email: "E-mail",
        phone: "Téléphone",
        register: "S'inscrire",
        logout: "Déconnexion",
        password: "Mot de passe",
        submit: "Soumettre",
        cancel: "Annuler",
        save: "Enregistrer",
        edit: "Modifier",
        delete: "Supprimer",
        search: "Rechercher",
        loading: "Chargement...",
        doctorImage: "Image du médecin",
        twitter: "Twitter",
        facebook: "Facebook",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        ok: "OK",
        welcome: "Bienvenue au Panneau Utilisateur Multilingue",
        rememberMe: "Se souvenir de moi",
        dontHaveAccount: "Vous n'avez pas de compte ?",
        alreadyHaveAccount: "Vous avez déjà un compte ?",
        signUp: "S'inscrire",
        signIn: "Se connecter",
      },

      // Navigation
      navigation: {
        home: "Accueil",
        about: "À propos",
        services: "Services",
        contact: "Contact",
        profile: "Profil",
        settings: "Paramètres",
        items: "Éléments",
        gallery: "Galerie",
        doctors: "Médecins",
      },

      // Auth
      loginTitle: "Connectez-vous à votre compte",
      registerTitle: "Créer un nouveau compte",
      forgotPassword: "Mot de passe oublié?",
      rememberMe: "Se souvenir de moi",
      dontHaveAccount: "Vous n'avez pas de compte?",
      alreadyHaveAccount: "Vous avez déjà un compte?",
      signUp: "S'inscrire",
      signIn: "Se connecter",

      // Panel
      panelDescriptionLine1:
        "Conçu sur la base de Bootstrap 5, Sass, Gulp et Js",
      panelDescriptionLine2: "Modes clair, sombre et système",
      panelDescriptionLine3: "Des dizaines de modèles HTML validés avec W3C",
      panelDescriptionLine4: "Plus de 50 widgets réutilisables",
      panelDescriptionLine5: "Code source entièrement documenté et commenté",
      panelDescriptionLine6: "Design moderne et créatif",
      panelDescriptionLine7:
        "Divers programmes et éléments fonctionnels réutilisables",
      patientName: "Nom du patient",
      doctor: "Médecin",
      department: "Département",
      appointmentDate: "Date de rendez-vous",
      reason: "Raison",
      deleteAppointment: "Supprimer le rendez-vous",

      // Messages
      accessDenied: "Accès refusé!",
      pleaseLogin: "Veuillez vous connecter ou vous inscrire d'abord.",
      loginSuccess: "Connexion réussie!",
      registerSuccess: "Inscription réussie!",
      logoutSuccess: "Déconnexion réussie!",
      errorOccurred: "Une erreur s'est produite. Veuillez réessayer.",
      deleteConfirm: {
        title: "Êtes-vous sûr?",
        text: "Cette action ne peut pas être annulée!",
        confirm: "Oui, supprimer",
        cancel: "Annuler",
      },
      deleteSuccess: {
        title: "Rendez-vous supprimé",
      },

      // About
      about: {
        title: "À propos de nous",
        description:
          "Nous nous engageons à fournir des services médicaux de haute qualité et de soins aux patients. Notre équipe est composée de médecins spécialisés et de personnel expérimenté qui utilisent les dernières technologies et méthodes de traitement pour fournir les meilleurs soins aux patients.",
        imageAlt: "Modern medical facility with state-of-the-art equipment",
        features: {
          workDayNight: {
            title: "Services 24/7",
            description: "Nous sommes prêts à vous servir 24 heures sur 24.",
          },
          emergency: {
            title: "Services d'urgence",
            description:
              "Notre équipe médicale est disponible immédiatement à votre emplacement.",
          },
          dedicatedService: {
            title: "Service dédié",
            description:
              "Nous fournissons des soins personnalisés pour répondre aux besoins spécifiques de chaque patient.",
          },
        },
      },

      // Counter
      counter: {
        doctors: "Médecins",
        departments: "Départements",
        researchLabs: "Laboratoires de Recherche",
        awards: "Prix",
      },

      // Service
      service: {
        title: "Services",
        description:
          "Nous proposons une large gamme de services médicaux pour répondre à vos besoins de santé. Notre équipe de professionnels expérimentés est dédiée à fournir des soins de haute qualité.",
        services: {
          hospital: {
            title: "Hôpital",
            description:
              "Fourniture de services médicaux complets avec des équipements avancés et un personnel médical qualifié",
          },
          pharmacy: {
            title: "Pharmacie",
            description:
              "Approvisionnement en médicaments nécessaires à des prix abordables et services de conseil pharmaceutique",
          },
          ecg: {
            title: "ECG",
            description:
              "Réalisation de tests cardiaques avec des équipements modernes et interprétation précise des résultats",
          },
          dnaTesting: {
            title: "Test ADN",
            description:
              "Réalisation de tests génétiques avec une grande précision et des équipements avancés",
          },
          disabilityCare: {
            title: "Soins aux personnes handicapées",
            description:
              "Fourniture de services spécialisés pour les personnes handicapées avec une approche de réadaptation",
          },
          medicalRecords: {
            title: "Dossiers médicaux",
            description:
              "Gestion et conservation des dossiers médicaux de manière électronique et sécurisée",
          },
        },
      },

      // Department
      department: {
        title: "Départements",
        description:
          "Nous fournissons des services médicaux complets à nos patients en utilisant des équipements avancés et un personnel médical qualifié.",
        departments: {
          cardiology: {
            title: "Cardiologie",
            description:
              "Notre département de cardiologie fournit des services médicaux complets aux patients en utilisant des équipements avancés et un personnel médical qualifié. Ce département est équipé d'appareils de diagnostic et de traitement modernes et offre les meilleurs services aux patients en utilisant les dernières technologies.",
          },
          neurology: {
            title: "Neurologie",
            description:
              "Notre département de neurologie fournit des services médicaux complets aux patients en utilisant des équipements avancés et un personnel médical qualifié. Ce département est équipé d'appareils de diagnostic et de traitement modernes et offre les meilleurs services aux patients en utilisant les dernières technologies.",
          },
          hepatology: {
            title: "Hépatologie",
            description:
              "Notre département d'hépatologie fournit des services médicaux complets aux patients en utilisant des équipements avancés et un personnel médical qualifié. Ce département est équipé d'appareils de diagnostic et de traitement modernes et offre les meilleurs services aux patients en utilisant les dernières technologies.",
          },
          pediatrics: {
            title: "Pédiatrie",
            description:
              "Notre département de pédiatrie fournit des services médicaux complets aux patients en utilisant des équipements avancés et un personnel médical qualifié. Ce département est équipé d'appareils de diagnostic et de traitement modernes et offre les meilleurs services aux patients en utilisant les dernières technologies.",
          },
          eyeCare: {
            title: "Soins Oculaires",
            description:
              "Notre département de soins oculaires fournit des services médicaux complets aux patients en utilisant des équipements avancés et un personnel médical qualifié. Ce département est équipé d'appareils de diagnostic et de traitement modernes et offre les meilleurs services aux patients en utilisant les dernières technologies.",
          },
        },
      },

      // Login Component
      login: {
        title: "Connexion au système",
        username: "Nom d'utilisateur",
        password: "Mot de passe",
        usernamePlaceholder: "Entrez votre nom d'utilisateur",
        passwordPlaceholder: "Entrez votre mot de passe",
        captcha: {
          title: "Entrez la somme",
          placeholder: "Entrez la somme",
          invalid: "Captcha invalide !",
          enterSum: "Entrez la somme de {{num1}} + {{num2}}",
        },
        buttons: {
          login: "Se connecter",
          loggingIn: "Connexion en cours...",
          register: "S'inscrire",
          forgotPassword: "Mot de passe oublié",
        },
        messages: {
          enterCredentials:
            "Veuillez entrer votre nom d'utilisateur et votre mot de passe !",
          invalidCaptcha: "Captcha invalide ! Veuillez réessayer.",
          loginSuccess: "✅ Connexion réussie !",
          invalidCredentials: "Nom d'utilisateur ou mot de passe incorrect !",
          serverError: "Erreur de connexion au serveur",
        },
      },

      // Register Component
      register: {
        title: "S'inscrire",
        username: "Nom d'utilisateur",
        email: "E-mail",
        password: "Mot de passe",
        usernamePlaceholder: "Entrez votre nom d'utilisateur",
        emailPlaceholder: "Entrez votre e-mail",
        passwordPlaceholder: "Entrez votre mot de passe",
        buttons: {
          register: "S'inscrire",
          registering: "Inscription en cours...",
        },
        messages: {
          fillAllFields: "Veuillez remplir tous les champs!",
          invalidEmail: "Adresse e-mail invalide",
          invalidPassword:
            "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre et au moins 8 caractères",
          usernameTaken: "Ce nom d'utilisateur est déjà pris!",
          emailTaken: "Cet e-mail est déjà enregistré!",
          registerSuccess: "Inscription réussie!",
          serverError: "Erreur de connexion au serveur. Veuillez réessayer!",
        },
      },

      // Messages for SweetAlert2 (French)
      messages: {
        accessDenied: "Accès refusé !",
        pleaseLogin: "Veuillez vous connecter ou vous inscrire d'abord.",
        loginSuccess: "Connexion réussie !",
        registerSuccess: "Inscription réussie !",
        logoutSuccess: "Déconnexion réussie !",
        errorOccurred: "Une erreur s'est produite. Veuillez réessayer.",
        deleteConfirm: {
          title: "Êtes-vous sûr ?",
          text: "Cette action ne peut pas être annulée !",
          confirm: "Oui, supprimer",
          cancel: "Annuler",
        },
        deleteSuccess: {
          title: "Rendez-vous supprimé",
        },
        profile: {
          accessDenied: "Accès refusé !",
          pleaseLogin: "Veuillez vous connecter pour accéder à votre profil.",
          redirecting: "Redirection vers la page de connexion...",
        },
      },

      // Home Component (French)
      home: {
        welcome: "Bienvenue sur notre site web",
        welcomeSubtitle:
          "Je m'efforce de créer des designs propres, conviviaux et professionnels qui offrent une excellente expérience pour vous.",
        characteristics: "Mes Caractéristiques",
        characteristicsText:
          "Qui suis-je ? Je suis orienté vers l'avenir et j'aime planifier des objectifs à long terme. Je recherche toujours la croissance personnelle, je n'ai pas peur des défis et je prends pleinement la responsabilité de mon travail. Je suis ponctuel, motivé et persévérant - je n'abandonne pas facilement.",
        viewPortfolio: "Voir Mon Portfolio",
        contracts: "Contrats",
        contractsText:
          "Je livre les projets avec un engagement total et selon le calendrier, et la responsabilité est ma priorité absolue.",
        projects: "Projets",
        projectsText:
          "Projets sélectionnés dans mon parcours d'apprentissage et de croissance, axés sur le design épuré et l'expérience utilisateur.",
        laboratory: "Laboratoire",
        laboratoryText:
          "C'est là que les idées uniques sont explorées, testées dans des scénarios réels et transformées en solutions durables et pratiques.",
      },

      // Footer Component (French)
      footer: {
        title: "MediCare Plus",
        description:
          "Nous nous engageons à fournir des services médicaux de qualité et des soins aux patients. Notre équipe est composée de médecins spécialisés et de personnel expérimenté qui utilisent les dernières technologies pour assurer votre bien-être.",
        usefulLinks: "Liens Utiles",
        home: "Accueil",
        aboutUs: "À Propos",
        services: "Services",
        termsOfService: "Conditions d'Utilisation",
        privacyPolicy: "Politique de Confidentialité",
        ourServices: "Nos Services",
        cardiology: "Cardiologie",
        neurology: "Neurologie",
        hepatology: "Hépatologie",
        pediatrics: "Pédiatrie",
        eyeCare: "Soins Oculaires",
        newsletter: "Notre Newsletter",
        newsletterDescription:
          "Abonnez-vous à notre newsletter pour recevoir des mises à jour et des nouvelles sur nos services.",
        enterEmail: "Entrez votre e-mail",
        subscribe: "S'abonner",
        copyright: "Droits d'Auteur",
        allRightsReserved: "Tous droits réservés",
        designedBy: "Conçu par",
        designerName: "Mehdi Ganji",
      },

      // Gallery
      gallery: {
        title: "Galerie",
        description:
          "Explorez notre établissement médical à travers notre galerie photo. Découvrez nos équipements modernes, notre personnel professionnel et notre environnement confortable.",
      },

      // Appointment Component (French)
      appointment: {
        title: "Prendre Rendez-vous",
        subtitle:
          "Veuillez remplir le formulaire ci-dessous pour prendre rendez-vous médical.",
        yourName: "Votre Nom",
        yourEmail: "Votre E-mail",
        phoneNumber: "Numéro de Téléphone",
        selectDate: "Sélectionner la Date",
        selectTime: "Sélectionner l'Heure",
        selectTimeShort: "Heure",
        selectDepartment: "Sélectionner le Département",
        selectDoctor: "Sélectionner le Médecin",
        notes: "Notes",
        bookAppointment: "Prendre Rendez-vous",
        departments: {
          neurology: "Neurologie",
          obstetrics: "Obstétrique",
          orthopedics: "Orthopédie",
          cardiology: "Cardiologie",
        },
        doctors: {
          khashayar: "Dr. Khashayar Ahmadi",
          niloufar: "Dr. Niloufar Pakzad",
          parastoo: "Dr. Parastoo Haghigi",
          dariush: "Dr. Dariush Bozorgmehr",
        },
        validation: {
          fillAllFields: "Veuillez remplir tous les champs obligatoires !",
          invalidPhone: "Numéro de téléphone invalide !",
          invalidEmail: "Adresse e-mail invalide",
          emailExists: "Cet e-mail est déjà enregistré.",
          phoneExists: "Ce numéro de téléphone est déjà enregistré.",
          invalidDate: "Veuillez sélectionner une date valide.",
          saveError: "Erreur lors de l'enregistrement des informations",
          phoneCheckError:
            "Erreur lors de la vérification du numéro de téléphone",
          emailCheckError: "Erreur lors de la vérification de l'e-mail",
          success: "Rendez-vous pris avec succès",
        },
      },

      // Contact Component (French)
      contact: {
        title: "Contactez-nous",
        description:
          "Nous sommes là pour vous aider. Que vous ayez des questions sur nos services, besoin de planifier un rendez-vous ou souhaitez en savoir plus sur notre centre médical, notre équipe est là pour vous aider. N'hésitez pas à nous contacter via l'un des canaux suivants.",
        form: {
          title: "Envoyez-nous un message",
          description:
            "Vous avez une question ou avez besoin d'aide ? Remplissez le formulaire ci-dessous et notre équipe vous contactera dès que possible.",
        },
      },
    },
  },
  fa: {
    translation: {
      // Common
      common: {
        login: "ورود",
        email: "ایمیل",
        phone: "تلفن",
        register: "ثبت نام",
        logout: "خروج",
        password: "رمز عبور",
        submit: "ثبت",
        cancel: "انصراف",
        save: "ذخیره",
        edit: "ویرایش",
        delete: "حذف",
        search: "جستجو",
        loading: "در حال بارگذاری...",
        doctorImage: "تصویر پزشک",
        twitter: "توییتر",
        facebook: "فیسبوک",
        instagram: "اینستاگرام",
        linkedin: "لینکدین",
        ok: "تایید",
        welcome: "به پنل کاربری چندزبانه خوش آمدید",
      },

      // Navigation
      navigation: {
        home: "خانه",
        about: "درباره ما",
        services: "خدمات",
        contact: "تماس با ما",
        profile: "پروفایل",
        settings: "تنظیمات",
        items: "موارد",
        gallery: "گالری",
        doctors: "پزشکان",
      },

      // Home
      home: {
        welcome: "به وبسایت ما خوش آمدید",
        welcomeSubtitle:
          "من در اینجا تلاش می‌کنم تا طراحی‌های تمیز، کاربرپسند و حرفه‌ای ایجاد کنم که تجربه عالی‌ای را برای شما فراهم کند.",
        characteristics: "ویژگی‌های من",
        characteristicsText:
          "من کی هستم؟ من آینده‌نگر هستم و عاشق برنامه‌ریزی برای اهداف بلندمدت هستم. من همیشه در پی رشد شخصی هستم، از چالش‌ها نمی‌ترسم و کاملاً مسئولیت کار خود را بر عهده می‌گیرم. من وقت‌شناس، با انگیزه و پشتکار هستم - به راحتی تسلیم نمی‌شوم.",
        viewPortfolio: "نمونه کارها",
        contracts: "قراردادها",
        contractsText:
          "من پروژه‌ها را با تعهد کامل و طبق برنامه تحویل می‌دهم و مسئولیت‌پذیری اولویت اصلی من است.",
        projects: "پروژه‌ها",
        projectsText:
          "پروژه‌های انتخاب شده در مسیر یادگیری و رشد من، با تمرکز بر طراحی تمیز و تجربه کاربری.",
        laboratory: "آزمایشگاه",
        laboratoryText:
          "این جایی است که ایده‌های منحصر به فرد بررسی می‌شوند، در سناریوهای واقعی آزمایش می‌شوند",
      },

      // Footer
      footer: {
        title: "مدیکر پلاس",
        description:
          "ما متعهد به ارائه خدمات پزشکی با کیفیت و مراقبت از بیماران هستیم. تیم ما از پزشکان متخصص و کارکنان مجرب تشکیل شده است که با استفاده از آخرین تکنولوژی‌ها، سلامت شما را تضمین می‌کنند.",
        usefulLinks: "لینک‌های مفید",
        home: "خانه",
        aboutUs: "درباره ما",
        services: "خدمات",
        termsOfService: "شرایط خدمات",
        privacyPolicy: "حریم خصوصی",
        ourServices: "خدمات ما",
        cardiology: "قلب و عروق",
        neurology: "مغز و اعصاب",
        hepatology: "کبد",
        pediatrics: "اطفال",
        eyeCare: "مراقبت از چشم",
        newsletter: "خبرنامه ما",
        newsletterDescription:
          "برای دریافت به‌روزرسانی‌ها و اخبار خدمات ما در خبرنامه ما مشترک شوید.",
        enterEmail: "ایمیل خود را وارد کنید",
        subscribe: "اشتراک",
        copyright: "کپی‌رایت",
        allRightsReserved: "تمام حقوق محفوظ است",
        designedBy: "طراحی شده توسط",
        designerName: "مهدی گنجی",
      },

      // Auth
      loginTitle: "ورود به حساب کاربری",
      registerTitle: "ایجاد حساب کاربری جدید",
      forgotPassword: "رمز عبور را فراموش کرده‌اید؟",
      rememberMe: "مرا به خاطر بسپار",
      dontHaveAccount: "حساب کاربری ندارید؟",
      alreadyHaveAccount: "قبلاً حساب کاربری دارید؟",
      signUp: "ثبت نام",
      signIn: "ورود",

      // Login Component
      login: {
        title: "ورود به سیستم",
        username: "نام کاربری",
        password: "رمز عبور",
        usernamePlaceholder: "نام کاربری خود را وارد کنید",
        passwordPlaceholder: "رمز عبور خود را وارد کنید",
        captcha: {
          title: "حاصل جمع را وارد کنید",
          placeholder: "حاصل جمع را وارد کنید",
          invalid: "کپچا نامعتبر است!",
          enterSum: "حاصل جمع {{num1}} + {{num2}} را وارد کنید",
        },
        buttons: {
          login: "ورود",
          loggingIn: "در حال ورود...",
          register: "ثبت نام",
          forgotPassword: "فراموشی رمز عبور",
        },
        messages: {
          enterCredentials: "لطفاً نام کاربری و رمز عبور را وارد کنید!",
          invalidCaptcha: "کپچا نامعتبر است! لطفاً دوباره تلاش کنید.",
          loginSuccess: "✅ ورود موفقیت‌آمیز!",
          invalidCredentials: "نام کاربری یا رمز عبور نامعتبر است!",
          serverError: "خطا در اتصال به سرور",
        },
      },

      // Panel
      panelDescriptionLine1: "طراحی شده بر اساس Bootstrap 5، Sass، Gulp و Js",
      panelDescriptionLine2: "حالت روشن، تاریک و سیستمی",
      panelDescriptionLine3: "ده ها طرح html اعتبار سنجی شده با W3C",
      panelDescriptionLine4: "بیش از 50 ابزارک قابل استفاده مجدد",
      panelDescriptionLine5: "سورس کد کاملاً مستند و دارای کامنت",
      panelDescriptionLine6: "طراحی مدرن و خلاقانه",
      panelDescriptionLine7:
        "دارای انواع برنامه و عناصر کاربردی با قابلیت استفاده مجدد",
      patientName: "نام بیمار",
      doctor: "پزشک",
      department: "بخش",
      appointmentDate: "تاریخ نوبت",
      reason: "دلیل",
      deleteAppointment: "حذف نوبت",

      // Messages
      accessDenied: "دسترسی رد شد!",
      pleaseLogin: "لطفاً ابتدا وارد شوید یا ثبت نام کنید.",
      loginSuccess: "ورود موفقیت‌آمیز!",
      registerSuccess: "ثبت نام موفقیت‌آمیز!",
      logoutSuccess: "خروج موفقیت‌آمیز!",
      errorOccurred: "خطایی رخ داد. لطفاً دوباره تلاش کنید.",
      deleteConfirm: {
        title: "آیا مطمئن هستید؟",
        text: "این عمل قابل بازگشت نیست!",
        confirm: "بله، حذف شود",
        cancel: "انصراف",
      },
      deleteSuccess: {
        title: "نوبت حذف شد",
      },

      // Appointment
      appointment: {
        title: "رزرو نوبت",
        subtitle: "لطفاً فرم زیر را برای رزرو نوبت پزشکی پر کنید.",
        yourName: "نام شما",
        yourEmail: "ایمیل شما",
        phoneNumber: "شماره تلفن",
        selectDate: "انتخاب تاریخ",
        selectTime: "انتخاب ساعت",
        selectTimeShort: "ساعت",
        selectDepartment: "انتخاب بخش",
        selectDoctor: "انتخاب پزشک",
        notes: "توضیحات",
        bookAppointment: "رزرو نوبت",
        departments: {
          neurology: "مغز و اعصاب",
          obstetrics: "زنان و زایمان",
          orthopedics: "ارتوپدی",
          cardiology: "قلب و عروق",
        },
        doctors: {
          khashayar: "دکتر خاشایار احمدی",
          niloufar: "دکتر نیلوفر پاکزاد",
          parastoo: "دکتر پرستو حقیقی",
          dariush: "دکتر داریوش بزرگمهر",
        },
        validation: {
          fillAllFields: "لطفا تمام فیلدهای مورد نیاز را پر کنید!",
          invalidPhone: "شماره وارد شده نامعتبر است!",
          invalidEmail: "ایمیل وارد شده صحیح نمی باشد",
          emailExists: "این ایمیل قبلاً ثبت شده است.",
          phoneExists: "این شماره تلفن قبلاً ثبت شده است.",
          invalidDate: "لطفاً یک تاریخ معتبر انتخاب کنید.",
          saveError: "خطا در ذخیره‌سازی اطلاعات",
          phoneCheckError: "خطا در بررسی شماره تلفن",
          emailCheckError: "خطا در بررسی ایمیل",
          success: "نوبت ثبت شد",
        },
      },

      // About
      about: {
        title: "درباره ما",
        description:
          "ما متعهد به ارائه خدمات پزشکی با کیفیت و مراقبت از بیماران هستیم. تیم ما از پزشکان متخصص و کارکنان مجرب تشکیل شده است که با استفاده از آخرین تکنولوژی‌ها و روش‌های درمانی، بهترین خدمات را به بیماران ارائه می‌دهند.",
        imageAlt: "Modern medical facility with state-of-the-art equipment",
        features: {
          workDayNight: {
            title: "خدمات شبانه روزی",
            description:
              "ما در تمام ساعات شبانه روز آماده خدمت‌رسانی به شما هستیم.",
          },
          emergency: {
            title: "خدمات اورژانسی",
            description:
              "در مواقع اضطراری، تیم پزشکی ما به سرعت در محل حاضر می‌شوند.",
          },
          dedicatedService: {
            title: "خدمات اختصاصی",
            description:
              "ما با ارائه خدمات شخصی‌سازی شده، نیازهای خاص هر بیمار را به بهترین شکل برآورده می‌کنیم.",
          },
        },
      },

      // Counter
      counter: {
        doctors: "پزشکان",
        departments: "بخش‌ها",
        researchLabs: "آزمایشگاه‌های تحقیقاتی",
        awards: "جوایز",
      },

      // Service
      service: {
        title: "خدمات پزشکی جامع",
        description:
          "مجموعه گسترده‌ای از خدمات پزشکی پیشرفته را برای پاسخگویی به نیازهای سلامت شما کشف کنید. امکانات مدرن ما و متخصصان پزشکی مجرب، متعهد به ارائه مراقبت‌های برتر با رویکرد شخصی‌سازی شده هستند.",
        services: {
          hospital: {
            title: "مراقبت‌های پیشرفته بیمارستانی",
            description:
              "در مرکز مدرن ما، از مراقبت‌های پزشکی جامع با تجهیزات پیشرفته و کادر درمانی مجرب بهره‌مند شوید.",
          },
          pharmacy: {
            title: "خدمات دارویی تخصصی",
            description:
              "با راهنمایی حرفه‌ای داروسازی، به طیف گسترده‌ای از داروها با قیمت‌های رقابتی و اطمینان از درمان ایمن و موثر دسترسی داشته باشید.",
          },
          ecg: {
            title: "تشخیص دقیق قلبی",
            description:
              "از تست‌های قلبی پیشرفته با تجهیزات مدرن و تفسیر تخصصی نتایج برای تشخیص دقیق بهره‌مند شوید.",
          },
          dnaTesting: {
            title: "تست ژنتیکی پیشرفته",
            description:
              "با تجهیزات دقیق و تحلیل تخصصی، به خدمات تست ژنتیکی پیشرفته برای درک جامع ژنتیکی دسترسی داشته باشید.",
          },
          disabilityCare: {
            title: "پشتیبانی تخصصی معلولیت",
            description:
              "مراقبت‌های جامع و خدمات توانبخشی متناسب با نیازهای منحصر به فرد افراد دارای معلولیت را دریافت کنید.",
          },
          medicalRecords: {
            title: "مستندسازی امن پزشکی",
            description:
              "سوابق پزشکی شما با بالاترین سطح امنیت و کارایی از طریق سیستم پیشرفته ثبت الکترونیکی مدیریت می‌شود.",
          },
        },
      },

      // Department
      department: {
        title: "بخش‌ها",
        description:
          "ما با استفاده از تجهیزات پیشرفته و کادر پزشکی مجرب، خدمات درمانی جامعی را به بیماران ارائه می‌دهیم.",
        departments: {
          cardiology: {
            title: "قلب و عروق",
            description:
              "بخش قلب و عروق ما با استفاده از تجهیزات پیشرفته و کادر پزشکی مجرب، خدمات درمانی جامعی را به بیماران ارائه می‌دهد. این بخش مجهز به دستگاه‌های مدرن تشخیصی و درمانی است و با استفاده از آخرین تکنولوژی‌ها، بهترین خدمات را به بیماران ارائه می‌کند.",
          },
          neurology: {
            title: "مغز و اعصاب",
            description:
              "بخش مغز و اعصاب ما با استفاده از تجهیزات پیشرفته و کادر پزشکی مجرب، خدمات درمانی جامعی را به بیماران ارائه می‌دهد. این بخش مجهز به دستگاه‌های مدرن تشخیصی و درمانی است و با استفاده از آخرین تکنولوژی‌ها، بهترین خدمات را به بیماران ارائه می‌کند.",
          },
          hepatology: {
            title: "کبد",
            description:
              "بخش کبد ما با استفاده از تجهیزات پیشرفته و کادر پزشکی مجرب، خدمات درمانی جامعی را به بیماران ارائه می‌دهد. این بخش مجهز به دستگاه‌های مدرن تشخیصی و درمانی است و با استفاده از آخرین تکنولوژی‌ها، بهترین خدمات را به بیماران ارائه می‌کند.",
          },
          pediatrics: {
            title: "اطفال",
            description:
              "بخش اطفال ما با استفاده از تجهیزات پیشرفته و کادر پزشکی مجرب، خدمات درمانی جامعی را به بیماران ارائه می‌دهد. این بخش مجهز به دستگاه‌های مدرن تشخیصی و درمانی است و با استفاده از آخرین تکنولوژی‌ها، بهترین خدمات را به بیماران ارائه می‌کند.",
          },
          eyeCare: {
            title: "مراقبت از چشم",
            description:
              "بخش مراقبت از چشم ما با استفاده از تجهیزات پیشرفته و کادر پزشکی مجرب، خدمات درمانی جامعی را به بیماران ارائه می‌دهد. این بخش مجهز به دستگاه‌های مدرن تشخیصی و درمانی است و با استفاده از آخرین تکنولوژی‌ها، بهترین خدمات را به بیماران ارائه می‌کند.",
          },
        },
      },

      // Register Component
      register: {
        title: "ثبت نام",
        username: "نام کاربری",
        email: "ایمیل",
        password: "رمز عبور",
        usernamePlaceholder: "نام کاربری خود را وارد کنید",
        emailPlaceholder: "ایمیل خود را وارد کنید",
        passwordPlaceholder: "رمز عبور خود را وارد کنید",
        buttons: {
          register: "ثبت نام",
          registering: "در حال ثبت نام...",
        },
        messages: {
          fillAllFields: "لطفاً تمام فیلدها را پر کنید!",
          invalidEmail: "آدرس ایمیل نامعتبر است",
          invalidPassword:
            "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و حداقل 8 کاراکتر باشد",
          usernameTaken: "این نام کاربری قبلاً استفاده شده است!",
          emailTaken: "این ایمیل قبلاً ثبت شده است!",
          registerSuccess: "ثبت نام با موفقیت انجام شد!",
          serverError: "خطا در اتصال به سرور. لطفاً دوباره تلاش کنید!",
        },
      },

      // Gallery
      gallery: {
        title: "مرکز پزشکی ما",
        description:
          "با گالری تصاویر ما، از مرکز پزشکی پیشرفته ما دیدن کنید. امکانات مدرن، تیم پزشکی متخصص و محیط راحت ما را که برای سفر سلامت شما ایجاد کرده‌ایم، کشف کنید.",
      },

      // Contact Component (Persian)
      contact: {
        title: "با ما در ارتباط باشید",
        description:
          "ما اینجا هستیم تا به شما کمک کنیم. چه سوالی در مورد خدمات ما دارید، نیاز به تعیین وقت ملاقات دارید، یا می‌خواهید بیشتر در مورد مرکز پزشکی ما بدانید، تیم ما آماده کمک به شماست. از طریق هر یک از کانال‌های زیر با ما در ارتباط باشید.",
        form: {
          title: "پیام خود را ارسال کنید",
          description:
            "سوالی دارید یا به کمک نیاز دارید؟ فرم زیر را پر کنید و تیم ما در اسرع وقت با شما تماس خواهند گرفت.",
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
      bindI18n: "languageChanged loaded",
      bindI18nStore: "added removed",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    },
  });

// اضافه کردن لاگ‌های بیشتر برای دیباگ
console.log("i18n initialized with languages:", Object.keys(resources));
console.log("Current i18n language:", i18n.language);

// Add event listener for language changes
i18n.on("languageChanged", (lng) => {
  console.log("i18n language changed to:", lng);
  console.log(
    "Available translations for",
    lng,
    ":",
    i18n.getResourceBundle(lng, "translation")
  );
  document.documentElement.lang = lng;
});

export default i18n;
