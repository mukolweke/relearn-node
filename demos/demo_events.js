/**
 * Events Module
 * 
 * - create
 * - fire
 * - listen
 * 
 * eventEmitterObject has all event properties & methods of instance object
 */

 import http from 'http';
 import { EventEmitter } from 'events';
 let eventEmitter = new EventEmitter();

 /**
  * You can assign event handlers to your own events with the EventEmitter object.
  */
 let myEventHandler = ()=>{
     console.log('I hear a knock at the door!');
 }

 // Assigning event handler (.on())
 eventEmitter.on('knock', myEventHandler);

 // Firing event (.emit())
eventEmitter.emit('knock')

 

