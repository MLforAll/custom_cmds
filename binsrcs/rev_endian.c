#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <err.h>

int
main(int ac, const char **av)
{
	char		*ns;
	const char	*s, *an;;
	size_t		len;

	an = *av;
	if (ac < 2)
		errx(EXIT_FAILURE, "usage: %s string", an);
	len = strlen((s = av[1]));
	if (len % 2)
		errx(EXIT_FAILURE, "%s: %s only works with len %% 2", an, s);
	ns = (char *)malloc(sizeof(char) * (len + 1));
	if (!ns)
		errx(EXIT_FAILURE, "%s: malloc failed", an);
	ns[len] = '\0';
	for (unsigned long idx = 0; len; idx += 2)
	{
		ns[idx + 1] = s[--len];
		ns[idx] = s[--len];
	}
	(void) puts(ns);
	free(ns);
	return EXIT_SUCCESS;
}
