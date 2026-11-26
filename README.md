\# Atelier Eureka - Applications Web Distribuées



\## Équipe

\- Prénom Nom 1

\- Prénom Nom 2



\## Architecture

| Microservice | Technologie | Port | Nom dans Eureka |

|---|---|---|---|

| Eureka Server | Spring Boot | 8761 | - |

| Candidat | Spring Boot + H2 | 8081 | CANDIDAT |

| Job | Spring Boot | 8082 | JOB |

| Meeting | Node.js / Express | 8083 | MEETING |

| Notification | Python / FastAPI | 8084 | NOTIFICATION |



\## Lancement

1\. Eureka : `cd eureka` puis `mvnw.cmd spring-boot:run`

2\. Candidat / Job : idem

3\. Meeting : `cd meeting`, `npm install`, `node index.js`

&#x20;  (2ème instance : `$env:PORT=8183; node index.js`)

4\. Notification : `cd notification`, `pip install -r requirements.txt`,

&#x20;  `$env:PORT=8084; uvicorn main:app --port 8084`



\## Dashboard Eureka

!\[Dashboard Eureka](dashboard.png)

