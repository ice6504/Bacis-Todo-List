pipeline {
    agent any
    stages {      
        stage("Copy file to Docker server"){
            steps {
				
                sh "scp -r /var/lib/jenkins/workspace/todo-list/* root@43.208.241.236:~/todo-list"
            }
        }
        
        stage("Build Docker Image") {
            steps {
                //path yaml files
				ansiblePlaybook playbook: '/var/lib/jenkins/workspace/todo-list/playbooks/build.yaml'
            }    
        } 
        
        stage("Create Docker Container") {
            steps {
                //path yaml files
				ansiblePlaybook playbook: '/var/lib/jenkins/workspace/todo-list/playbooks/deploy.yaml'
            }    
        } 
    }
}
