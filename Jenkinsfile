pipeline
{
    agent any
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
        stage('build')
        {
            steps
            {
                sh 'npm run build'
            }
        }
         stage('host')
        {
            steps
            {
                sh 'sudo cp -r ${WORKSPACE}/build/* /var/www/html/'
            }
        }
    }
        
}
