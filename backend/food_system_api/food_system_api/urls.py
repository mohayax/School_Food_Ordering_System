from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/refresh/', TokenRefreshView.as_view(), name = 'token_refresh'),
    path('api/accounts/', include('users.urls')),
    path('api/vendors/', include('vendor.urls')),
    path('api/customer/', include('customer.urls')),
    path('api/menu-items/', include('menu_item.urls')),
    path('api/orders/', include('order.urls'))
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name = 'index.html')) ]