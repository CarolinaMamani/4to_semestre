import math
from decimal import Decimal

#NaN (not a number)

a = float('nan')
print(f'a: {a}')

#Modulo math
a = float('nan')
print(f'Es de tipo NaN (not a number)?: {math.isnan(a)}')

#Modulo decimal
a = Decimal('NaN')
print(f'Es un nan? : {math.isnan(a)}')

