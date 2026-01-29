const soporteTecnico = {
    "Windows": [
        { id: 1, titulo: "Pantalla Azul (BSOD)", pasos: "Reinicia en modo seguro y actualiza drivers." },
        { id: 2, titulo: "Lentitud al arrancar", pasos: "Desactiva programas en la pestaña Inicio del Administrador de Tareas." }
    ],
    "Linux": [
        { id: 3, titulo: "Permisos denegados", pasos: "Usa el comando 'chmod +x' o antepone 'sudo' al comando." },
        { id: 4, titulo: "Interfaz gráfica congelada", pasos: "Presiona Ctrl+Alt+F3 y reinicia el servicio gdm o lightdm." }
    ],
    "macOS": [
        { id: 5, titulo: "Pelota de playa giratoria", pasos: "Usa Command + Option + Esc para forzar la salida de apps." }
    ]
};