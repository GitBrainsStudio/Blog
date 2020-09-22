# Angular Material
## Подключение сие чуда в проект

В данной статье не буду описывать что такое **Angular Material**, а просто дам на него [ссылку](https://material.angular.io/). Если вы читаете данную статью, то вы уже знаете что это, и желаете скорее подключить данный **CDK** в проект **Angular**.

Как обычно в моём стиле, без лишних слов, сразу к действиям.

1. Командуем в **npm**:
    
         npm install @angular/material @angular/cdk --save
    
2. Создаём в папке **app** файл **material.module.ts**
3. Заполняем файл **material.module.ts** следующим образом:

        import {NgModule} from '@angular/core';
        import {A11yModule} from '@angular/cdk/a11y';
        import {ClipboardModule} from '@angular/cdk/clipboard';
        import {DragDropModule} from '@angular/cdk/drag-drop';
        import {PortalModule} from '@angular/cdk/portal';
        import {ScrollingModule} from '@angular/cdk/scrolling';
        import {CdkStepperModule} from '@angular/cdk/stepper';
        import {CdkTableModule} from '@angular/cdk/table';
        import {CdkTreeModule} from '@angular/cdk/tree';
        import {MatAutocompleteModule} from '@angular/material/autocomplete';
        import {MatBadgeModule} from '@angular/material/badge';
        import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
        import {MatButtonModule} from '@angular/material/button';
        import {MatButtonToggleModule} from '@angular/material/button-toggle';
        import {MatCardModule} from '@angular/material/card';
        import {MatCheckboxModule} from '@angular/material/checkbox';
        import {MatChipsModule} from '@angular/material/chips';
        import {MatStepperModule} from '@angular/material/stepper';
        import {MatDatepickerModule} from '@angular/material/datepicker';
        import {MatDialogModule} from '@angular/material/dialog';
        import {MatDividerModule} from '@angular/material/divider';
        import {MatExpansionModule} from '@angular/material/expansion';
        import {MatGridListModule} from '@angular/material/grid-list';
        import {MatIconModule} from '@angular/material/icon';
        import {MatInputModule} from '@angular/material/input';
        import {MatListModule} from '@angular/material/list';
        import {MatMenuModule} from '@angular/material/menu';
        import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
        import {MatPaginatorModule} from '@angular/material/paginator';
        import {MatProgressBarModule} from '@angular/material/progress-bar';
        import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
        import {MatRadioModule} from '@angular/material/radio';
        import {MatSelectModule} from '@angular/material/select';
        import {MatSidenavModule} from '@angular/material/sidenav';
        import {MatSliderModule} from '@angular/material/slider';
        import {MatSlideToggleModule} from '@angular/material/slide-toggle';
        import {MatSnackBarModule} from '@angular/material/snack-bar';
        import {MatSortModule} from '@angular/material/sort';
        import {MatTableModule} from '@angular/material/table';
        import {MatTabsModule} from '@angular/material/tabs';
        import {MatToolbarModule} from '@angular/material/toolbar';
        import {MatTooltipModule} from '@angular/material/tooltip';
        import {MatTreeModule} from '@angular/material/tree';
        import {OverlayModule} from '@angular/cdk/overlay';

        @NgModule({
        exports: [
            A11yModule,
            ClipboardModule,
            CdkStepperModule,
            CdkTableModule,
            CdkTreeModule,
            DragDropModule,
            MatAutocompleteModule,
            MatBadgeModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatChipsModule,
            MatStepperModule,
            MatDatepickerModule,
            MatDialogModule,
            MatDividerModule,
            MatExpansionModule,
            MatGridListModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            MatMenuModule,
            MatNativeDateModule,
            MatPaginatorModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatRippleModule,
            MatSelectModule,
            MatSidenavModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatSnackBarModule,
            MatSortModule,
            MatTableModule,
            MatTabsModule,
            MatToolbarModule,
            MatTooltipModule,
            MatTreeModule,
            OverlayModule,
            PortalModule,
            ScrollingModule,
        ]
        })
        export class MaterialModule {}

4. Импортируем созданный модуль material.module.ts в файле **app.module.ts**

        @NgModule({
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            HttpClientModule,

            //Вот он снизу
            MaterialModule,
        ],


5. Добавляем импорт **material темы** в файл **styles.css**
   
        @import '~@angular/material/prebuilt-themes/indigo-pink.css';


6. ### Наслаждаемся! либо проверяем, например:

        <button mat-raised-button color="warn">Warn</button>
