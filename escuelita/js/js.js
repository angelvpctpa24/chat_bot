      const questions = [
            {
                question: "¿En qué grado estás interesado(a) en inscribirte?",
                options: ["Preescolar", "Primaria (1°-6°)", "Secundaria (7°-9°)", "Bachillerato (10°-11°)"]
            },
            {
                question: "¿Cuál es tu edad actual?",
                options: ["3-5 años", "6-11 años", "12-14 años", "15-17 años"]
            },
            {
                question: "¿Has estudiado en otra institución educativa anteriormente?",
                options: ["Sí, en escuela pública", "Sí, en escuela privada", "No, sería mi primera experiencia", "He estado en educación en casa"]
            },
            {
                question: "¿Qué área académica te interesa más?",
                options: ["Ciencias y Matemáticas", "Humanidades y Letras", "Artes y Creatividad", "Deportes y Educación Física"]
            },
            {
                question: "¿Participas o te gustaría participar en actividades extracurriculares?",
                options: ["Deportes", "Arte y música", "Clubes académicos", "Voluntariado social"]
            },
            {
                question: "¿Cómo prefieres aprender?",
                options: ["Práctica y experimentación", "Lectura y teoría", "Trabajo en equipo", "Estudio individual"]
            },
            {
                question: "¿Qué tan importante es para ti el apoyo personalizado del profesor?",
                options: ["Muy importante", "Importante", "Moderadamente importante", "Puedo ser independiente"]
            },
            {
                question: "¿Tienes alguna necesidad educativa especial o apoyo requerido?",
                options: ["No requiero apoyo especial", "Apoyo de aprendizaje", "Apoyo físico", "Prefiero no especificar"]
            },
            {
                question: "¿Qué idiomas te gustaría estudiar además del español?",
                options: ["Inglés", "Francés", "Alemán", "Mandarín"]
            },
            {
                question: "¿Qué tan importante es para ti la tecnología en el aprendizaje?",
                options: ["Muy importante", "Importante", "Moderadamente importante", "Prefiero métodos tradicionales"]
            },
            {
                question: "¿Te interesa participar en competencias académicas?",
                options: ["Sí, me encanta competir", "Tal vez, dependiendo del tema", "No mucho", "Prefiero colaborar que competir"]
            },
            {
                question: "¿Qué tipo de ambiente escolar prefieres?",
                options: ["Estructurado y disciplinado", "Flexible y creativo", "Equilibrado", "Orientado a la investigación"]
            },
            {
                question: "¿Planeas continuar estudios universitarios después del bachillerato?",
                options: ["Definitivamente sí", "Probablemente sí", "No estoy seguro(a)", "Prefiero estudios técnicos"]
            },
            {
                question: "¿Qué tan importante es para ti el servicio comunitario?",
                options: ["Muy importante", "Importante", "Moderadamente importante", "No es prioridad"]
            },
            {
                question: "¿Prefieres horarios de estudio?",
                options: ["Matutino (7:00-13:00)", "Vespertino (13:00-18:00)", "Jornada completa", "Horario flexible"]
            },
            {
                question: "¿Qué tipo de evaluación prefieres?",
                options: ["Exámenes tradicionales", "Proyectos y presentaciones", "Evaluación continua", "Portafolios de trabajo"]
            },
            {
                question: "¿Te interesa el intercambio estudiantil internacional?",
                options: ["Mucho, me encantaría", "Sí, pero con ciertas condiciones", "Tal vez en el futuro", "No me interesa"]
            },
            {
                question: "¿Qué tan importante es para ti el uso de uniformes escolares?",
                options: ["Me parece bien", "No me molesta", "Preferiría vestir casual", "Es indiferente"]
            },
            {
                question: "¿Cómo te enteraste de nuestra Academia?",
                options: ["Recomendación familiar", "Internet y redes sociales", "Feria educativa", "Referencia de amigos"]
            },
            {
                question: "¿Qué esperas lograr durante tus estudios con nosotros?",
                options: ["Excelencia académica", "Desarrollo personal", "Preparación universitaria", "Crecimiento integral"]
            }
        ];

        let currentQuestion = 0;
        let answers = [];
        let chatStarted = false;

        function startChat() {
            chatStarted = true;
            showNextQuestion();
        }

        function showNextQuestion() {
            if (currentQuestion >= questions.length) {
                completeChat();
                return;
            }

            const chatMessages = document.getElementById('chatMessages');
            const chatOptions = document.getElementById('chatOptions');
            
            // Add bot question
            const questionDiv = document.createElement('div');
            questionDiv.className = 'message bot';
            questionDiv.innerHTML = `
                <div class="avatar bot-avatar">🎓</div>
                <div class="message-bubble">${questions[currentQuestion].question}</div>
            `;
            chatMessages.appendChild(questionDiv);

            // Update options
            const optionsHtml = questions[currentQuestion].options.map(option => 
                `<button class="option-btn" onclick="selectAnswer('${option}')">${option}</button>`
            ).join('');
            
            chatOptions.innerHTML = `<div class="option-buttons">${optionsHtml}</div>`;
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
            updateProgress();
        }

        function selectAnswer(answer) {
            answers.push({
                question: questions[currentQuestion].question,
                answer: answer
            });

            const chatMessages = document.getElementById('chatMessages');
            
            // Add user response
            const responseDiv = document.createElement('div');
            responseDiv.className = 'message user';
            responseDiv.innerHTML = `
                <div class="avatar user-avatar">👤</div>
                <div class="message-bubble">${answer}</div>
            `;
            chatMessages.appendChild(responseDiv);
            
            currentQuestion++;
            
            setTimeout(() => {
                showNextQuestion();
            }, 500);
        }

        function updateProgress() {
            const progress = (currentQuestion / questions.length) * 100;
            document.getElementById('progressFill').style.width = `${progress}%`;
        }

        function completeChat() {
            const chatMessages = document.getElementById('chatMessages');
            const chatOptions = document.getElementById('chatOptions');
            
            const completionDiv = document.createElement('div');
            completionDiv.className = 'message bot';
            completionDiv.innerHTML = `
                <div class="avatar bot-avatar">🎓</div>
                <div class="message-bubble">¡Excelente! Has completado el cuestionario de preselección. Nuestro equipo revisará tus respuestas y se pondrá en contacto contigo pronto. ¡Gracias por tu interés en Academia CTPA!</div>
            `;
            chatMessages.appendChild(completionDiv);

            chatOptions.innerHTML = `
                <div class="completion-message">
                    <h3>🎉 ¡Cuestionario Completado!</h3>
                    <p>Gracias por completar nuestro proceso de preselección. Un consejero académico se comunicará contigo en las próximas 48 horas.</p>
                    <button class="option-btn" onclick="downloadResults()" style="margin-top: 10px;">📄 Descargar Resumen</button>
                </div>
            `;
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
            updateProgress();
        }

        function downloadResults() {
            let resultsText = "RESUMEN DEL CUESTIONARIO DE PRESELECCIÓN\n";
            resultsText += "Academia CTPA\n";
            resultsText += "=" .repeat(50) + "\n\n";
            
            answers.forEach((item, index) => {
                resultsText += `${index + 1}. ${item.question}\n`;
                resultsText += `   Respuesta: ${item.answer}\n\n`;
            });
            
            resultsText += "Fecha: " + new Date().toLocaleDateString('es-ES');
            resultsText += "\n\nGracias por tu interés en Academia CTPA.";
            
            const blob = new Blob([resultsText], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Preseleccion_Academia_San_Miguel.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }