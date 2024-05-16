pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                script {
                    sh 'docker rmi nextjs-prisma-template || true'  // Ignore error if the image doesn't exist
                    sh 'docker build -t nextjs-prisma-template .'
                    sh 'docker run -d nextjs-prisma-template'
                }
            }
        }
    }
}
