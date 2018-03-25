#!/bin/sh
lst=`find srcs/ -type f -name "*.c" 2> /dev/null`
lst="$lst `find includes/ -type f -name "*.h" 2> /dev/null`"
norminette $lst
