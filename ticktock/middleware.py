from django.http import HttpResponse


class CorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.method == 'OPTIONS':
            response = HttpResponse()
            response["Access-Control-Allow-Origin"] = "*"
            response["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
            response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
            return response

        response = self.get_response(request)
        response["Access-Control-Allow-Origin"] = "*"
        return response
    
    def process_response(self, request, response):
        response["Access-Control-Allow-Origin"] = "*"
        return response