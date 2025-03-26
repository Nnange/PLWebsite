pipeline {
    agent any

    tools {
        jdk 'JDK 21'
        maven "Maven"   // Your Maven configuration
        nodejs "NodeJS" // Your NodeJS configuration
    }

    environment {
        FRONTEND_DIR = 'FE_premier-zone'
        BACKEND_DIR = 'premier-zone'
        FRONTEND_IMAGE = "football-frontend:latest"
        BACKEND_IMAGE = "football-backend:latest"
        // DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials') // DockerHub credentials if you plan to push images
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Nnange/PLWebsite.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir(FRONTEND_DIR) {
                    sh 'npm install'
                    withCredentials([
                        string(credentialsId: 'PUBLIC_BACKEND_URL', variable: 'PUBLIC_BACKEND_URL')
                    ]) {
                    // sh 'npm run test'  // Jest testing
                        sh 'npm run build '
                        sh 'docker build --build-arg PUBLIC_BACKEND_URL=${PUBLIC_BACKEND_URL} -t ${FRONTEND_IMAGE} .'
                    }
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir(BACKEND_DIR) {
                    //  withCredentials passes sensitive information
                    withCredentials([
                    string(credentialsId: 'DB_PASSWORD', variable: 'SPRING_DATASOURCE_PASSWORD')
                ]){

                    // Create secrets.properties dynamically
                    sh '''
                        echo "spring.datasource.password=${SPRING_DATASOURCE_PASSWORD}" > src/main/resources/secrets.properties
                    '''
                    sh 'mvn clean'  
                    sh 'mvn package -DskipTests'
                    sh 'docker build -t ${BACKEND_IMAGE} .'
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                withCredentials([
                    string(credentialsId: 'PUBLIC_BACKEND_URL', variable: 'PUBLIC_BACKEND_URL'),
                    string(credentialsId: 'DB_PASSWORD', variable: 'SPRING_DATASOURCE_PASSWORD')

                ]){

                    sh '''
                    export PUBLIC_BACKEND_URL=${PUBLIC_BACKEND_URL}
                    export DB_PASSWORD=${DB_PASSWORD}
                    docker-compose down
                    docker-compose up -d --build
                    '''  
                }
            }
        }
    }

    post {
        always {
            sh 'docker image prune -f' // Clean up images
        //     // cleanWs() // Clean workspace after build'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
