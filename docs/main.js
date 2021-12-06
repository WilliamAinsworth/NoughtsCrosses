(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Will\workspace\NoughtsCrosses\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LcVa":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_logic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-logic.service */ "gbez");
/* harmony import */ var _grid_point_grid_point_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-point/grid-point.component */ "tStR");



class BoardComponent {
    constructor(gameLogicService) {
        this.gameLogicService = gameLogicService;
        this.winnerString = '';
        this.updateWinner = () => {
            this.winnerString = '';
            const endState = this.gameLogicService.gameState.endState;
            if (endState) {
                if (endState === 'WIN') {
                    this.winnerString = `${this.gameLogicService.gameState.currentPlayer} WINS! Play Again?`;
                }
                else {
                    this.winnerString = 'The Game was a DRAW! Play Again?';
                }
            }
        };
        this.reset = () => {
            this.winnerString = '';
        };
        document.addEventListener('GAME-OVER', this.updateWinner);
        document.addEventListener('GAME-RESET', this.reset);
    }
    restartClick() {
        this.gameLogicService.resetGame();
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_logic_service__WEBPACK_IMPORTED_MODULE_1__["GameLogicService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 18, vars: 2, consts: [[1, "container"], [1, "msg"], [1, "board"], [3, "className", "click"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Noughts & Crosses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_16_listener() { return ctx.restartClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Restart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Msg: ", ctx.winnerString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "restart");
    } }, directives: [_grid_point_grid_point_component__WEBPACK_IMPORTED_MODULE_2__["GridPointComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: clamp(50px, 100vh, 900px);\r\n  width: clamp(500px, 100vh, 900px);\r\n}\r\n\r\n.msg[_ngcontent-%COMP%] {\r\n  padding: 2rem;\r\n  margin: 5rem;\r\n  max-height: 100px;\r\n  max-width: 500px;\r\n}\r\n\r\n.msg[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: clamp(1.5rem, 3.5vw, 25px);\r\n}\r\n\r\n.msg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: clamp(2rem, 6vw, 40px);\r\n}\r\n\r\n.board[_ngcontent-%COMP%] {\r\n  padding-top: clamp(1rem, 6vw, 50px);\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n\r\n  \r\n  margin: 1rem;\r\n  \r\n}\r\n\r\n.restart[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  font-size: 2rem;\r\n  margin: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLCtCQUErQjs7RUFFL0Isc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBjbGFtcCg1MHB4LCAxMDB2aCwgOTAwcHgpO1xyXG4gIHdpZHRoOiBjbGFtcCg1MDBweCwgMTAwdmgsIDkwMHB4KTtcclxufVxyXG5cclxuLm1zZyB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBtYXJnaW46IDVyZW07XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLm1zZyBoMiB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDMuNXZ3LCAyNXB4KTtcclxufVxyXG5cclxuLm1zZyBoMSB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA2dncsIDQwcHgpO1xyXG59XHJcblxyXG4uYm9hcmQge1xyXG4gIHBhZGRpbmctdG9wOiBjbGFtcCgxcmVtLCA2dncsIDUwcHgpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xyXG5cclxuICAvKmdyaWQtdGVtcGxhdGUtcm93czogMjV2dyAyNXZ3IDI1dnc7Ki9cclxuICBtYXJnaW46IDFyZW07XHJcbiAgLypvdmVyZmxvdzogbm8tY29udGVudDsqL1xyXG59XHJcblxyXG4ucmVzdGFydCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAycmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/board.component */ "LcVa");


class AppComponent {
    constructor() {
        this.title = 'NoughtsCrosses';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-board");
    } }, directives: [_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "LcVa");
/* harmony import */ var _board_grid_point_grid_point_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/grid-point/grid-point.component */ "tStR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
        _board_grid_point_grid_point_component__WEBPACK_IMPORTED_MODULE_4__["GridPointComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "gbez":
/*!***************************************!*\
  !*** ./src/app/game-logic.service.ts ***!
  \***************************************/
/*! exports provided: player, GameLogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLogicService", function() { return GameLogicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var player;
(function (player) {
    player["X"] = "X";
    player["O"] = "O";
})(player || (player = {}));
class GameLogicService {
    constructor() {
        this.gameOverEvent = new Event('GAME-OVER');
        this.gameResetEvent = new Event('GAME-RESET');
        this.idCount = 0;
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.resetGame = () => {
            this.gameState = {
                currentPlayer: player.X,
                boardState: ['', '', '', '', '', '', '', '', '']
            };
            this.idCount = 0;
            document.dispatchEvent(this.gameResetEvent);
        };
        this.takeTurn = (index) => {
            // Scoring the board
            this.gameState.boardState[index] = this.gameState.currentPlayer;
            // Checking if game is over
            if (!this.isGameOver()) {
                // Swapping player
                if (this.gameState.currentPlayer === player.X) {
                    this.gameState.currentPlayer = player.O;
                }
                else {
                    this.gameState.currentPlayer = player.X;
                }
            }
        };
        this.isGameOver = () => {
            for (const winCondition of this.winningConditions) {
                const a = this.gameState.boardState[winCondition[0]];
                const b = this.gameState.boardState[winCondition[1]];
                const c = this.gameState.boardState[winCondition[2]];
                if (a === '' || b === '' || c === '') {
                    continue;
                }
                if (a === b && b === c) {
                    this.gameOver('WIN');
                    return true;
                }
            }
            if (!this.gameState.boardState.includes('')) {
                this.gameOver('DRAW');
                return true;
            }
            return false;
        };
        this.gameOver = (endState) => {
            this.gameState.endState = endState;
            document.dispatchEvent(this.gameOverEvent);
        };
        this.resetGame();
    }
    getId() {
        const id = this.idCount;
        this.idCount++;
        return id;
    }
}
GameLogicService.ɵfac = function GameLogicService_Factory(t) { return new (t || GameLogicService)(); };
GameLogicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameLogicService, factory: GameLogicService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tStR":
/*!**********************************************************!*\
  !*** ./src/app/board/grid-point/grid-point.component.ts ***!
  \**********************************************************/
/*! exports provided: GridPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPointComponent", function() { return GridPointComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_logic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game-logic.service */ "gbez");


class GridPointComponent {
    constructor(gameLogicService) {
        this.gameLogicService = gameLogicService;
        this.disabled = false;
        this.mark = '';
        this.gridPointClick = () => {
            this.disabled = true;
            this.mark = this.gameLogicService.gameState.currentPlayer;
            this.gameLogicService.takeTurn(this.id);
            console.log(this.id + ' clicked');
        };
        this.reset = () => {
            this.disabled = false;
            this.mark = '';
        };
        this.endGame = () => {
            this.disabled = true;
        };
        this.id = this.gameLogicService.getId();
        document.addEventListener('GAME-RESET', this.reset);
        document.addEventListener('GAME-OVER', this.endGame);
    }
}
GridPointComponent.ɵfac = function GridPointComponent_Factory(t) { return new (t || GridPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_logic_service__WEBPACK_IMPORTED_MODULE_1__["GameLogicService"])); };
GridPointComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridPointComponent, selectors: [["app-grid-point"]], decls: 2, vars: 3, consts: [[3, "className", "disabled", "click"]], template: function GridPointComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridPointComponent_Template_button_click_0_listener() { return ctx.gridPointClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.mark + " grid-item gridPoint")("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mark.toUpperCase(), "\n");
    } }, styles: [".gridPoint[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #3a5a40;\r\n\r\n  width: clamp(1rem, 20vw, 200px);\r\n  height: clamp(1rem, 20vw, 200px);\r\n  border: 0.125rem solid white;\r\n  padding: 3rem;\r\n  font-size: clamp(1rem, 6vw, 5rem);\r\n  text-align: center;\r\n}\r\n\r\n.gridPoint[_ngcontent-%COMP%]:disabled {\r\n  color: white;\r\n}\r\n\r\n.gridPoint.O[_ngcontent-%COMP%] {\r\n  background-color: #f7b267;\r\n}\r\n\r\n.gridPoint.X[_ngcontent-%COMP%] {\r\n  background-color: lightblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtcG9pbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztFQUNuQyx5QkFBeUI7O0VBRXpCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6ImdyaWQtcG9pbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkUG9pbnQge1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTVhNDA7XHJcblxyXG4gIHdpZHRoOiBjbGFtcCgxcmVtLCAyMHZ3LCAyMDBweCk7XHJcbiAgaGVpZ2h0OiBjbGFtcCgxcmVtLCAyMHZ3LCAyMDBweCk7XHJcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCB3aGl0ZTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNnZ3LCA1cmVtKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmlkUG9pbnQ6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdyaWRQb2ludC5PIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdiMjY3O1xyXG59XHJcbi5ncmlkUG9pbnQuWCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map