def mostrar_menu():
    print("\n--- Menú ---")
    print("1. Ingresar nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")
    return input("Elige una opción: ")

def ingresar_persona():
    nombre = input("Ingresa el nombre: ")
    apellido = input("Ingresa el apellido: ")
    dni = input("Ingresa el DNI: ")
    telefonos = input("Ingresa los teléfonos separados por comas: ").split(",")
    hijos = input("Ingresa los nombres de los hijos separados por comas: ").split(",")
    return [nombre, apellido, dni, [t.strip() for t in telefonos], [h.strip() for h in hijos]]

def mostrar_todos(datos):
    print("\nDatos ingresados:")
    for persona in datos:
        print(f"{persona[0]} {persona[1]}, DNI: {persona[2]}, Teléfonos: {len(persona[3])} teléfono(s), Hijos: {len(persona[4])}")

def filtrar_por_dni(datos):
    dni = input("Ingresa el DNI para filtrar: ")
    for persona in datos:
        if persona[2] == dni:
            print(f"\nDatos de {persona[0]} {persona[1]}:")
            print(f"DNI: {persona[2]}, Teléfonos: {len(persona[3])} teléfono(s), Hijos: {len(persona[4])}")
            return
    print("No se encontró una persona con ese DNI.")

datos = []
while True:
    opcion = mostrar_menu()
    if opcion == "1":
        datos.append(ingresar_persona())
    elif opcion == "2":
        mostrar_todos(datos)
    elif opcion == "3":
        filtrar_por_dni(datos)
    elif opcion == "4":
        break
    else:
        print("Opción no válida.")
