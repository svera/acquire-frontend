export var es = {
  "es": {
    "connection_lost": "Perdida conexión con el servidor, reconectando...",
    "connection_error": "No se pudo conectar con el servidor.",
    "game_terminated": "Partida terminada por su propietario.",
    "kicked": "Te han expulsado de una partida.",
    "room_timed_out": "La sala ha expirado.",
    "create_game": "Crear partida",
    "join": "Unirse",
    "remove": "Eliminar",
    "cancel": "Cancelar",
    "back": "Volver",
    "available_games": "Partidas disponibles",
    "no_games_available": "No hay partidas disponibles para unirse.",
    "no_limit": "Sin límite",
    "x_seconds": "%{number} segundos",
    "one_minute": "1 minuto",
    "player_timeout": "Has sido expulsado de la partida por inactividad.",
    "game_panicked": "Lo sentimos, pero el juego ha finalizado debido a un error interno",    
    "home": {
      "header": "¡Hazte rico!",
      "subheader": "Compra, vende y especula para vencer a tus rivales.",
      "player_time_limit": "Límite de tiempo por turno",      
    }, 
    "lobby": {
      "title": "Sala de espera para la partida %{gameID}",
      "connected_players": "Jugadores conectados",
      "add_bot": "Añadir bot",
      "start_game": "Comenzar partida",
      "start_game_disabled": "Esperando %{number} jugadores más...",
      "select_bot_level": "Selecciona el nivel del bot",
      "game_options": "Opciones de la partida",
      "your_name": "Tu nombre",
      "change_name": "Cambiar",
    },
    "game": {
      "turn": "Turno %{turnNumber}",
      "terminate": "Terminar la partida",
      "size": "Tamaño",
      "price": "Precio",
      "majority_bonus": "Bonus mayoritario",
      "minority_bonus": "Bonus minoritario",
      "remaining_stock": "Stock restante",
      "cash": "Dinero",
      "leave": "Abandonar",
      "waiting": "Esperando por otros jugadores...",
      "play_tile": "Haz click en una ficha para jugarla",
      "founded_corporation": "¡Has fundado una nueva corporación! Por favor, selecciona una:",
      "found_corporation": "Fundar corporación",
      "buy_stock": "Comprar stock",
      "buy_stock_description": "Selecciona el número de acciones que deseas comprar de las corporaciones activas.",
      "sell_trade_title": "Vender / Intercambiar acciones",
      "sell_trade": "Vender / Intercambiar",
      "sell": "Vender",
      "trade": "Intercambiar",
      "untie_merge_title": "Hay un empate en la fusión:",
      "untie_merge": "Desempatar fusión",
      "claim_end": "Declarar fin de partida",
      "end_game_claimed": "¡Declarado el final de la partida!",
      "not_end_game": "La partida no ha alcanzado las condiciones para declarar su fin.",
      "action_not_allowed": "Acción no permitida",
      "not_an_acquirer_corporation": "La corporación elegida no es una de las adquisidoras",
      "time_left": "%{time} segundos restantes",
      "history": {
        "starter_player": "%{player} es el jugador inicial",
        "played_tile": "%{player} jugó la ficha %{tile}",
        "founded_corporation": "%{player} fundó %{corporation}",
        "bought_stock": "%{player} compró %{amount} acciones de %{corporation}",
        "sold_stock": "%{player} vendió %{amount} acciones de %{corporation}",
        "traded_stock": "%{player} intercambió %{amount} acciones de %{corporation}",
        "untied_merge": "%{player} desempató la fusión eligiendo %{corporation}",
        "claimed_end": "%{player} declaró el fin de la partida",
        "player_left": "%{player} ha abandonado la partida",
        "no_tiles_available": "%{player} no recibió ninguna ficha nueva porque no hay más disponibles",            
      },
      "insufficient_players": {
        "title": "¡Oooooops!",
        "body": "Lo sentimos, uno de los jugadores ha abandonado la partida y no quedan suficientes participantes para continuar."
      },
      "finished": {
        "title": "Fin de partida"
      },
      "errors": {
        "buy_too_many_shares": "Solo puedes comprar un máximo de 3 acciones por turno.",
        "not_enough_cash": "No tienes suficiente dinero.",
        "not_enough_shares": "No tienes suficientes acciones."        
      },
      "instructions": {
        "title": "Como jugar",
        "text": "<h3>Objetivo del juego</h3>\
        <p>Tener más dinero que nadie al acabar la partida. Ganas dinero formando corporaciones, comprando\
        las acciones correctas en el momento preciso, así como absorbiendo y expandiendo corporaciones de las que posees acciones.</p>\
        <h3>Como jugar</h3>\
        <p>Cada jugador comienza con $6,000, y realiza las siguientes dos acciones en orden:</p>\
        <ol>\
        <li>Jugar una ficha en el tablero.</li>\
        <li>Comprar acciones de corporaciones activas (que existan en el tablero). hay un límite de tres acciones por turno.</li>\
        </ol>\
        <h4>1. Jugando una ficha</h4>\
        <p>Dependiendo de cual sea la ficha jugada, puede fundar una\
        corporación o puede unir dos o más corporaciones.\
        (Por supuesto, también puede jugarse una ficha que no provoque nada.)</p>\
        <p><strong>Fundando una corporación:</strong> Cuando un jugador juega una ficha adyacente \
        a una ficha no perteneciente a ninguna corporación (vertical u \
        horizontalmente, no diagonalmente), se funda una nueva corporación.\
        El fundador de la corporación elige primero entre las corporaciones disponibles, y recibe una \
        acción de dicha corporación como bonificación.</p>\
        <p><em>Nota:</em> Si la corporación elegida tiene todas sus acciones vendidas, \
        no se otorga la bonificación de fundador.</p>\
        <p>Cualquier ficha que pudiese formar una octava corporación no puede ser jugada, \
        y aparecerá marcada con una X. (Solo existen siete corporaciones.)\
        Sin embargo, dicha ficha puede jugarse posteriormente si una fusión \
        hiciese disponible de nuevo una de las corporaciones.</p>\
        <p><strong>Fusionar corporaciones:</strong> Cuando un jugador juega una ficha que \
        conecta dos (o más) corporaciones, se produce una fusión.\
        La corporación más grande (la que cuenta con más fichas) sobrevive\
        y la más pequeña desaparece. Durante la fusión, \
        la ficha que la desencadena no se añade al tamaño de ninguna de las corporaciones \
        involucradas bajo ningún concepto. Si ambas corporaciones son del mismo tamaño,\
        el jugador que efectua la fusión decide cual de ellas sobrevive.\
        La corporación superviviente absorbe a la difunta,\
        volviendo a estar esta última disponible para ser fundada de nuevo.</p>\
        <p><strong>Corporaciones seguras:</strong> Una corporación compuesta de 11 fichas o más\
        es considerada <em>segura</em> y no puede ser absorbida por otra durante el \
        resto del juego. Una corporación segura puede absorber a otra más pequeña, pero dos\
        corporaciones seguras no pueden fusionarse. \
        Cualquier ficha que al jugarse pueda fusionar dos corporaciones seguras \
        es permanentemente injugable y será sustituída al final del turno.</p>\
        <p><strong>Bonificaciones de accionista mayoritario y minoritario:</strong> En el momento\
        de una fusión, los jugadores \
        con el mayor y segundo mayor número de acciones son declarados accionista mayoritario y minoritario, \
        respectivamente, recibiendo las bonificaciones correspondientes.</p>\
        <p>Si un solo jugador cuenta con acciones de la corporación absorbida,\
        este obtiene ambas bonificaciones. Si hay más de un accionista mayoritario, \
        se suman las bonificaciones de accionista mayoritario y minoritario y se divide el resultado a partes iguales\
        entre ellos. \
        (El accionista minoritario no recibe bonificación.) \
        Si hay más de un accionista minoritario, \
        la bonificación de accionista minoritario se divide entre ellos.</p>\
        <p><em>Nota:</em> Los accionistas en la corporación superviviente no reciben\
        ninguna bonificación, pero el valor de sus acciones probablemente aumentará\
        debido al crecimiento de dicha corporación.</p>\
        <p>Tras el pago de las bonificaciones, cada accionista debe\
        decidir qué hacer con sus acciones en las corporaciones absorbidas. Cada jugador, comenzando\
        por el que inicia la fusión, puede mantener, vender\
        e intercambiar sus acciones en dichas corporaciones.</p>\
        <ul>\
        <li><strong>Mantener:</strong> Las acciones pueden conservarse con la esperanza de fundar de\
        nuevo esa corporación más adelante.</li>\
        <li><strong>Vender:</strong> Las acciones pueden ser vendidas al precio determinado por \
        el número de fichas de la corporación absorbida antes de la fusión.</li>\
        <li><strong>Intercambiar:</strong> Por cada dos acciones de la corporación difunta,\
        el jugador obtiene una de la corporación superviviente.\
        Por supuesto, la cantidad de acciones es limitada,\
        por lo que no puedes obtener acciones si no hay más disponibles.</li>\
        </ul>\
        <p><em>Nota:</em> Los jugadores pueden realizar más de una de esas opciones.\
        Por ejemplo, un jugador podría conservar varias acciones de una corporación absorbida,\
        vender otras pocas e intercambiar el resto.</p>\
        <p><strong>Fusión múltiple:</strong> Es posible que una ficha provoque\
        la fusión de tres o cuatro corporaciones. La mayor de esas corporaciones\
        sobrevive y las más pequeñas son absorbidas.\
        El jugador que provoca la fusión rompe cualquier empate. La fusión comienza \
        desde la corporación más pequeña a la mayor.\
        Las bonificaciones de accionista mayoritario y minoritario se pagan tal y como se \
        describió previamente, y las acciones de la corporación absorbida pueden manterse,\
        venderse o intercambiarse. Como es habitual, quien inicia la fusión es el primero en comprar y vender.</p>\
        <h4>2. Comprar acciones</h4>\
        <p>Tras colocar una ficha, el jugador puede comprar acciones de cualquier \
        corporación activa. Esto es opcional. Un jugador puede decidir no comprar ninguna acción \
        o hasta tres en un turno. Por ejemplo,\
        un jugador puede comprar acciones en tres corporaciones activas diferentes\
         - o una de una corporación y dos de otra\
        - o tres de la misma.</p>\
        <p><strong>Quedarse sin dinero:</strong> Competir agresivamente por convertirse\
        en el accionista mayoritario de una corporación puee ser arriesgado.\
        Invierte sabiamente en corporaciones pequeñas y cercanas a otras\
        mayores. Un jugador sin dinero sigue colocando una ficha en cada turno, \
        si es posible, pero debe esperar a que una corporación de la que posea acciones sea \
        absorbida para poder conseguir dinero vendiendo sus acciones.</p>\
        <h4>3. Final del turno</h4>\
        <p>El jugador recibe una nueva ficha para sustituir la que ha jugado. \
        Esto no se hace hasta el final del turno.\
        En ese momento, si el jugador cuenta con fichas permanentemente injugables \
        (aquellas que fusionarian dos corporaciones seguras), \
        el jugador recibe el mismo número de fichas para sustituirlas. Esto \
        solo se realiza una vez por turno. Si tras la substitución se obtienen más fichas injugables,\
        estás serán sustituidas el siguiente turno.\
        Las fichas que pueden formar una octava corporación no son sustituibles.</p>\
        <h3>Fin del juego</h3>\
        <p>La partida termina cuando uno de los jugadores, durante su turno, declara\
        que todas las corporaciones activas son seguras o que una corporación\
        tiene un tamaño de 41 fichas o superior. Un jugador no está obligado a declarar\
        el fin del juego si es más ventajoso para él seguir jugando. \
        Tras anunciar el fin de la partida, el jugador puede finalizar su turno.</p>\
        <p>Las bonificaciones de accionista mayoritario y minoritario son pagadas\
        para todas las corporaciones activas, y todas las acciones son vendidas a sus precios en ese momento. \
        Las acciones de una corporación que no esté en tablero no tienen valor.\
        ¡El jugador con más dinero es el ganador de la partida!</p>"  
      }
    }
  }
};
