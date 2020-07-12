# Http Interceptor - как то, что ты должен знать.

Angular HTTP Interceptor позволяет перехватывать HTTP-запросы перед их отправкой и вносить в них необходимые изменения. То же самое справедливо и для ответов сервера.

Наиболее частое их применение - отправка авторизационных данных, логирование и обработка серверных ошибок.

Мой костяк, который я использовал при написании [блога на материал](https://github.com/GitBrainsStudio/Angular-Material-Blog):


    @Injectable()
    export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private _snackBar : SnackBarService,  private _authenticationService : AuthenticationService, private _router : Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const currentUser = this._authenticationService.currentUserValue;
        const isLoggedIn = currentUser;
        const isApiUrl = request.url.startsWith(Api
            );
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                    if (event.body.message)
                    {
                        this._snackBar.openSnackBar(event.body.message, 'закрыть');
                    }
                }
                return event;
            }),
            
            catchError((error: HttpErrorResponse) => {
                if ([401, 403].indexOf(error.status) !== -1) {
                    this._authenticationService.logout();
                    this._snackBar.openSnackBar('Необходимо выполнить вход в приложение', 'закрыть');
                    this._router.navigate(['/authenticate']);

                }

                else if ([0].indexOf(error.status) !== -1){
                    this._snackBar.openSnackBar('Не смогли получить ответ от сайта. Возможно, удалённый сервер не доступен.', 'закрыть');
                }

                else

                if (error.error != null)
                {
                    this._snackBar.openSnackBar(error.error, 'закрыть');
                }
                
                return throwError(error);
            }));
            
        }
    }   
