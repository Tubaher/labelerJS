#!/usr/bin/env python
import sys
import re


actual_format = 'BCDFGHJKLPRSTVWXYZ'
past_format_letter1 = 'ABCDEFGHKLNPRSTUVXYZWMO'
past_format_letter2 = 'ABCDEFGHIJKLNPRSTUVXYZ'

lpr_patterns = [
  '^['+actual_format+']{4}[0-9]{2}$',
  '^['+past_format_letter1+']['+ past_format_letter2 +'][0-9]{4}$'
]

if __name__ == "__main__":
    annotation_file = str(sys.argv[1])


    f = open(annotation_file, "r")
    for line in f:
        img, label = line.split(sep=" ")
        
        str_match = False
        
        for pattern in lpr_patterns:
            if re.match(pattern,str(label)):
                str_match = True

        if not str_match:
            print( "img: {0} with label: {1} not match with patterns".format(img,label))