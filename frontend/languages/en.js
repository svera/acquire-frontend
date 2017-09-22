export var en = {
  "en": {
    "connection_lost": "Connection to server lost, reconnecting...",
    "connection_error": "Error connecting to server.",
    "game_terminated": "Game terminated by owner.",
    "kicked": "You have been kicked out of the game by its owner.",
    "room_timed_out": "Room timed out",
    "create_game": "Create game",
    "join": "Join",
    "remove": "Remove",
    "cancel": "Cancel",
    "back": "Back",
    "available_games": "Available games",
    "no_games_available": "No games currently available to join.",
    "no_limit": "No limit",
    "x_seconds": "%{number} seconds",
    "one_minute": "1 minute",
    "player_timeout": "You have been kicked out due to inactivity.",
    "game_panicked": "Sorry, game has been ended due to an internal error",
    "home": {
      "header": "Get rich!",
      "subheader": "Buy, sell and speculate to overcome your rivals",
      "player_time_limit": "Player turn time limit",
    },     
    "lobby": {
      "title": "Lobby for game %{gameID}",
      "connected_players": "Connected players",
      "start_game": "Start game",
      "start_game_disabled": "Waiting for %{number} more players...",
      "add_bot": "Add bot",
      "select_bot_level": "Select bot level",
      "game_options": "Game options",
      "your_name": "Your name",      
    },
    "game": {
      "turn": "Turn %{turnNumber}",
      "terminate": "Terminate game",
      "size": "Size",
      "price": "Price",
      "majority_bonus": "Majority bonus",
      "minority_bonus": "Minority bonus",
      "remaining_stock": "Remaining stock",
      "cash": "Cash",
      "leave": "Leave",
      "waiting": "Waiting for other players...",
      "play_tile": "Click on a tile to play it",
      "founded_corporation": "You have founded a new corporation! Please choose one:",
      "found_corporation": "Found corporation",
      "buy_stock": "Buy stock",
      "buy_stock_description": "Select how many stock shares of the active corporations do you want to buy.",
      "sell_trade_title": "Sell / Trade stock shares",
      "sell_trade": "Sell / Trade",
      "sell": "Sell",
      "trade": "Trade",
      "untie_merge_title": "There is a tie in the merge:",
      "untie_merge": "Untie merge",
      "claim_end": "Claim end",
      "end_game_claimed": "End game claimed!",
      "not_end_game": "End game conditions not reached.",
      "action_not_allowed": "Action not allowed",
      "not_an_acquirer_corporation": "Chosen corporation isn't an acquirer one",
      "time_left": "%{time} seconds left",
      "history": {
        "starter_player": "%{player} is the starting player",
        "played_tile": "%{player} played tile %{tile}",
        "founded_corporation": "%{player} founded %{corporation}",
        "bought_stock": "%{player} bought %{amount} stock shares of corporation %{corporation}",
        "sold_stock": "%{player} sold %{amount} stock shares of %{corporation}",
        "traded_stock": "%{player} traded %{amount} stock shares of %{corporation}",
        "untied_merge": "%{player} untied merge choosing %{corporation}",
        "claimed_end": "%{player} claimed end game",
        "player_left": "%{player} has left the game"        
      },
      "insufficient_players": {
        "title": "Oooooops!",
        "body": "Sorry, one of the players has left the game and there are not enough players to continue playing."
      },
      "finished": {
        "title": "Game over"
      },
      "errors": {
        "buy_too_many_shares": "You can only buy a maximum of 3 stock shares per turn.",
        "not_enough_cash": "Not enough cash.",
        "not_enough_shares": "Not enough shares."
      },
      "instructions": {
        "title": "How to play",
        "text": "<h3>Object of the game</h3>\
        <p>Have the most money at the end of the game. You make money by forming corporations, buying\
        the right stock at the right time, as well as merging and expanding corporations in which you own stock.</p>\
        <h3>How to play</h3>\
        <p>Each player starts with $6,000, and does the following two things in order:</p>\
        <ol>\
        <li>Play a tile on the gameboard.</li>\
        <li>Buy stocks of any active corporations. There is a limit\
        of three total per turn.</li>\
        </ol>\
        <h4>1. Playing a tile</h4>\
        <p>Depending upon where a tile is played, it may form a\
        corporation or it may merge two or more corporations.\
        (Of course, a tile may also be played which does nothing.)</p>\
        <p><strong>Founding a corporation:</strong> When a player plays a tile which is next to\
        an unincorporated tile already on the gameboard (vertically\
        or horizontally, not diagonally), a corporation is founded.\
        The corporation founder first selects an available corporation. The player then\
        receives a free founder’s bonus stock (of that corporation).</p>\
        <p><em>Note:</em> If players are already holding all the corporation’s\
        stock, then no founder’s bonus stock is given out.</p>\
        <p>Any tile that would form an eighth corporation cannot be\
        played. (There are only seven corporations in the game.)\
        However, such a tile might be played later in the game if a\
        merger makes a corporation available again.</p>\
        <p><strong>Merging corporations:</strong> When a player plays a tile that\
        connects two (or more) corporations, a merger takes place.\
        The larger corporation (the one with more tiles) survives\
        and the smaller corporation becomes defunct. During the\
        merger, the merging tile does not add to the size of either\
        corporation for any purpose. If the corporations are the\
        same size, then the mergemaker decides which corporation\
        survives. The surviving corporation absorbs the defunct\
        one. The defunct company is removed from the gameboard.</p>\
        <p><em>Note:</em> if more than two corporations are merged by one\
        tile, see multiple mergers section below for details.</p>\
        <p><strong>Safe corporations:</strong> A corporation that contains 11 or more\
        tiles is considered <em>safe</em> and cannot be absorbed by another\
        corporation for the rest of the game. A safe corporation\
        can absorb a smaller corporation, but two safe corporations\
        cannot merge. Any tile that would merge two safe corporations\
        is permanently unplayable and will be replaced later in the turn.</p>\
        <p><strong>Majority and minority stockholders' bonuses:</strong> At the time\
        of a merger, the players\
        with the most and second-most stocks are declared majority\
        and minority stockholders. The banker pays them the majority\
        and minority stockholders’ bonuses as described below.</p>\
        <p>If only one player owns stock in the defunct corporation,\
        that player gets both bonuses. If there is a tie for majority\
        stockholder, add the majority and minority bonuses\
        together, divide evenly and round up to the next payable\
        dollar amount if necessary. (The minority shareholder\
        gets no bonus.) If there is a tie for minority stockholder,\
        split the minority bonus among the tied players.</p>\
        <p><em>Note:</em> Stockholders in the surviving corporation don’t get\
        any bonuses, but the value of their stock will probably go\
        up because the corporation has grown larger.</p>\
        <p>After bonuses have been paid out, each stockholder must\
        decide what to do with the defunct stock. Each player, starting\
        with the mergemaker, can hold, sell,\
        and trade the defunct stock.</p>\
        <ul>\
        <li><strong>Hold:</strong> Stock may be held in expectation of starting another\
        corporation with that name later.</li>\
        <li><strong>Sell:</strong> Stock may be sold back to the stock market at a price\
        determined by the number of tiles in the defunct corporation\
        before the merger.</li>\
        <li><strong>Trade:</strong> Stock may be traded. For every two defunct stock\
        cards traded in, the player gets one stock in the surviving\
        corporation. Of course, the supply of surviving stock cards\
        is limited, so you can’t acquire stock that is not available.</li>\
        </ul>\
        <p><em>Note:</em> Players are allowed to choose more than one of the\
        above options. For example, a player could hold onto a few\
        of the defunct stocks, sell some and trade some.</p>\
        <p><strong>Multiple mergers:</strong> It is possible that one tile could cause\
        the merger of three or four corporations. The largest\
        corporation survives and the smaller ones become defunct.\
        The mergemaker breaks any ties. The smaller corporations\
        are dealt with - one at a time - from largest to smallest.\
        Majority and minority stockholder bonuses are paid out as\
        described previously, and then the defunct stock is held,\
        sold or traded. As usual, the mergemaker goes first.</p>\
        <h4>2. Buying stocks</h4>\
        <p>After placing a tile, the player may buy stock in any active\
        corporation. This is optional. A player may decide to buy\
        none or up to three stock cards on a turn. For example,\
        a player can buy one stock card in three different active\
        corporations - or one in one corporation and two in another\
        - or three stock cards in one corporation.</p>\
        <p><strong>Running out of money:</strong> Aggressively competing to become\
        the majority stockholder in a corporation can be risky.\
        Invest wisely in corporations that are small and close to\
        bigger ones. A player who runs out of money cannot buy\
        stock. A player with no money still places a tile on each of\
        his/her turns, if possible, but must wait for a corporation in\
        which he/she owns stock to go defunct in order to get money.\
        Remember, a player can sell a corporation’s stock only\
        after the corporation has gone defunct, and at the end of\
        the game.</p>\
        <h4>3. End of turn</h4>\
        <p>A player receives a new tile to replace\
        the one he/she played. This is not done until the end of\
        the turn. At this time, if a player has any permanently\
        unplayable tiles (ones that merge two safe corporations),\
        that player receives an equal number of replacement tiles. This is\
        only done once per turn. If more unplayable tiles are\
        drawn, the player must wait until his/her next turn to\
        discard them. Tiles that would form an eighth corporation\
        are not traded in.</p>\
        <h3>Ending the game</h3>\
        <p>The game ends when one player, during his/her turn, announces\
        that either all active corporations are safe or that one corporation\
        has 41 or more tiles on the gameboard. A player does not have\
        to announce that the game is over if it is to his/her advantage\
        to continue playing. After announcing that the game is over,\
        the player may finish the turn.</p>\
        <p>Majority and minority shareholders’ bonuses are paid out\
        for all active corporations, and all stocks are sold back to the\
        stock market bank at current prices. Stock in a corporation that is not on the board is worthless.\
        The player with the most money wins!</p>"
      }
    }
  }
};
