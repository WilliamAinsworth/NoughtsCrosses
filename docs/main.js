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
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 16, vars: 2, consts: [[1, "container"], [1, "msg"], [1, "board"], [3, "className", "click"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-grid-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_14_listener() { return ctx.restartClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Restart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to Noughts & Crosses: ", ctx.winnerString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "restart");
    } }, directives: [_grid_point_grid_point_component__WEBPACK_IMPORTED_MODULE_2__["GridPointComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  \r\n}\r\n\r\n.board[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 15rem 15rem 15rem;\r\n  grid-template-rows: 15rem 15rem 15rem;\r\n  margin: 5rem;\r\n}\r\n\r\n.msg[_ngcontent-%COMP%] {\r\n  height: 5rem;\r\n  width: auto;\r\n  background-color: #145DA0;\r\n  border-color: steelblue;\r\n  border-style: solid;\r\n  border-width: 0.5rem;\r\n}\r\n\r\n.msg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  background-color: steelblue;\r\n}\r\n\r\n.restart[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  font-size: 2rem;\r\n  margin: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgLypkaXNwbGF5OiBmbGV4OyovXHJcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xyXG4gIC8qYWxpZ24taXRlbXM6IGZsZXgtZW5kOyovXHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIDE1cmVtIDE1cmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTVyZW0gMTVyZW0gMTVyZW07XHJcbiAgbWFyZ2luOiA1cmVtO1xyXG59XHJcblxyXG4ubXNnIHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NURBMDtcclxuICBib3JkZXItY29sb3I6IHN0ZWVsYmx1ZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMC41cmVtO1xyXG59XHJcblxyXG4ubXNnIGgxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbi5yZXN0YXJ0IHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuIl19 */"] });


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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Noughts & Crosses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-board");
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
    } }, styles: [".gridPoint[_ngcontent-%COMP%] {\r\n  background-color: steelblue;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 0.125rem solid;\r\n  padding: 3rem;\r\n  font-size: 5rem;\r\n  text-align: center;\r\n}\r\n\r\n.gridPoint[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.gridPoint.O[_ngcontent-%COMP%] {\r\n  background-color: darkblue;\r\n}\r\n\r\n.gridPoint.X[_ngcontent-%COMP%] {\r\n  background-color: lightblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtcG9pbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJncmlkLXBvaW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZFBvaW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMC4xMjVyZW0gc29saWQ7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBmb250LXNpemU6IDVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JpZFBvaW50ID4gYnV0dG9uIHtcclxuXHJcbn1cclxuXHJcbi5ncmlkUG9pbnQuTyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbn1cclxuLmdyaWRQb2ludC5YIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuIl19 */"] });


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