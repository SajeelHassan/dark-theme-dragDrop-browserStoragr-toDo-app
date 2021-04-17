
class UI{
    constructor(){
        this.newInput=document.getElementById('create-task');
        this.showAll=document.getElementById('show_items__all');
        this.showActive=document.getElementById('show_items__active');
        this.showCompleted=document.getElementById('show_items__completed');
        this.clearAll=document.getElementById('clear_all');
        this.itemsLeft=document.getElementById('items_left');
    }
    
}

export const theUI=new UI();