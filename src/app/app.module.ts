import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { IndexComponent } from './Pages/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatDividerModule} from '@angular/material/divider';
import { MatRadioModule} from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { UsersComponent} from './Pages/Admin/users/users.component';
import { PerfilComponent} from './Pages/Admin/perfil/perfil.component';
import { PageNotFoundComponent} from './Pages/page-not-found/page-not-found.component';
import { AddBooksComponent } from './Pages/Admin/Books/add-books/add-books.component';
import { EditBooksComponent } from './Pages/Admin/Books/edit-books/edit-books.component';
import { ViewBooksComponent } from './Pages/Admin/Books/view-books/view-books.component';
import { MatTreeModule} from '@angular/material/tree';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminIndexComponent } from './Pages/Admin/admin-index/admin-index.component';
import { NavsComponent } from './Pages/Users/navs/navs.component';
import { UsersIndexComponent } from './Pages/Users/users-index/users-index.component';
import { UsersPerfilComponent } from './Pages/Users/users-perfil/users-perfil.component';
import { BuyBooksComponent } from './Pages/Users/Books/buy-books/buy-books.component';
import { BooksDetailsComponent } from './Pages/Users/Books/books-details/books-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    LoginComponent,
    SignupComponent,
    IndexComponent,
    UsersComponent,
    PerfilComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AddBooksComponent,
    EditBooksComponent,
    ViewBooksComponent,
    FooterComponent,
    AdminIndexComponent,
    NavsComponent,
    UsersIndexComponent,
    UsersPerfilComponent,
    BuyBooksComponent,
    BooksDetailsComponent
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatTreeModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatSortModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
