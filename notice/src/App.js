import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        En esta pagina usted va a encontrar la historia de los juegos,
        sus distintas ventajas y desventajas, que se puede adquirir y sus beneficios.
        </p>

        <button id="close-image"><img src="truco.png" alt="Truco" width="100" height="100"></img> El jugador a la derecha del dador es el “mano” y cuenta con ciertas preferencias en el juego, además de ser el primero en jugar. El último jugador de cada bando, es el “pie”, que suele actuar como capitán y estratega del equipo. Cada jugador estudia las posibilidades que ofrecen sus cartas y, si tiene flor o buen envido, lo comunicará por señas a su compañero o compañeros, al tiempo que observa las de los otros jugadores. Empieza a jugar el “mano”, que puede cantar flor si la tiene, apostar a envido o jugar una de sus cartas. independientemente de lo que haga, cada jugador en su turno tiene esas tres opciones hasta que se juega una carta, ya que en este caso se empieza a jugar el truco y ya no se admite que se cante flor o envido, aunque sí responder a esos cantos. Resueltas las apuestas, se juegan las cartas para conocer al ganador del truco. Tras finalizar éste, se procede a la anotación del juego parcial. Durante el juego, se dice que un jugador o un bando va a la pesca cuando guarda silencio a la espera de que los contrarios sean los primeros en apostar o trucar para entonces responderles. Orden y valor de las cartas
El orden de las cartas es válido para el truco y determina el ganador de la baza. El valor de las cartas lo es para las apuestas sobre flor y envido.

En el Truco hay cuatro cartas especiales que se conocen como cartas bravas y son las superiores de toda la baraja. El orden de estas cartas, de mayor a menor, es el siguiente: as de espadas (espadilla), as de bastos (bastillo), siete de espadas y siete de oros (sietes bravos).

Para el resto, el orden, de mayor a menor, es: treses, doses, ases falsos (as de oros y de copas), cartas negras (reyes, caballos y sotas), sietes falsos (siete de copas y de bastos), seises, cincos y cuatros.

El valor de las cartas, para la flor y el envido, es el siguiente: las cartas negras valen 0 y las restantes tienen el valor en tantos que señala su índice.</button>
        
        <button id="close-image"><img src="RDR2.png" alt="Red Dead Redemption 2" width="100" height="100"></img>Red Dead Redemption</button>

        <button id="close-image"><img src="GTA5.png" alt="GTA5" width="100" height="100"></img>GTA 5</button>

        <button id="close-image"><img src="Fifa.png" alt="Fifa" width="100" height="100"></img> Fifa</button>

        <button id="close-image"><img src="NBA2K23.png" alt="NBA 2K 23" width="100" height="100"></img> NBA 2K 23</button>

        <button id="close-image"><img src="NFS.png" alt="Need For Speed" width="100" height="100"></img> Need For Speed</button>

        <button id="close-image"><img src="bloodborne.png" alt="Dark souls bloodborne" width="100" height="100"></img>Bloodborne</button>
      </header>
    </div>
  );
}

export default App;
