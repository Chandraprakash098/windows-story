pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/Chandraprakash098/windows-story.git', branch: 'master')
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        sh 'scp -r build/* user@your-server:/var/www/html/'
      }
    }

  }
}