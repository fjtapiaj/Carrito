from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
from CarritoApp.Carrito import Carrito
from CarritoApp.models import Producto

def index(request):  
    context={}
    return render(request, 'CarritoApp/index.html', context)

def escuelaInglaterra(request):
    context={}
    return render(request, 'CarritoApp/escinglaterra.html', context)

def escuelaAbateMolina(request):
    context={}
    return render(request, 'CarritoApp/escabatemolina.html', context)


#def carrito(request):
    
 #   context={}
  #  return render(request, 'CarritoApp/tienda.html', context)



def tienda(request):
    productos = Producto.objects.all()
    return render(request, "tienda.html", {'productos':productos})

def agregar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.agregar(producto)
    return redirect("Tienda")

def eliminar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.eliminar(producto)
    return redirect("Tienda")

def restar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.restar(producto)
    return redirect("Tienda")

def limpiar_carrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect("Tienda")