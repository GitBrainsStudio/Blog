# Как передать и потом спарсить параметры в маршруте.

**Angular** предлагает интерфейсный класс **ActivatedRoute**, который содержит информацию о маршруте, связанном с компонентом, загруженным в шаблон приложения **Angular**.

**ActivatedRoute** содержит дерево состояний маршрутизатора в памяти углового приложения.

    constructor(private activatedRouter:ActivatedRoute) { }
    
    ngOnInit(): void {
    console.log(this.activatedRouter.snapshot.params['id']);
    }

Данный код отобразит в консоле параметр 'id', который мы передали.

Да, кстати, передаём параметры следующим образом:

    [routerLink]="['/post', post.id]"