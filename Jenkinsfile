pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Your NodeJS configuration
        maven "Maven"   // Your Maven configuration
    }

    environment {
        FRONTEND_DIR = 'FE_premier-zone'
        BACKEND_DIR = 'premier-zone'
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
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Build and tag Docker images
                    sh 'docker-compose build'
                    sh 'docker-compose up -d'  // Deploy on home server
                }
            }
        }
    }

    post {
        // always {
        //     // cleanWs() // Clean workspace after build'
        // }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
