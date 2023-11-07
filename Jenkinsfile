pipeline
{
    agent any
    
    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}
	
    stages
    {
        stage('fetch code')
        {
            steps
            {
                git branch: 'main',url: 'https://github.com/TESLAOPUnix/react-circleci.git'
            }
        }
        stage('install')
        {
            steps
            {
                sh 'npm install'
            }
        }
        stage('docker login') {
            steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
        }
        stage('build image') {
            steps {
                script {
                    def tag = env.BUILD_NUMBER
                    sh "docker build -t teslaopunix/react-ci-cd:$tag ."
                    sh "docker push teslaopunix/react-ci-cd:$tag"
                   
                }
            }
        }   
    }
     post {
		always {
			sh 'docker logout'
		}
	}
}
