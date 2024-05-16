pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                docker rmi nextjs-prisma-template
                docker build -t nextjs-prisma-template .
                docker run -d nextjs-prisma-template
            }
        }
    }
}
