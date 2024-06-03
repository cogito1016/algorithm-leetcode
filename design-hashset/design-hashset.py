class MyHashSet(object):

    def __init__(self):
        self.size = 10 ** 6 + 1
        self.set = [0] * self.size

    def add(self, key):
        """
        :type key: int
        :rtype: None
        """
        self.set[key] = 1


    def remove(self, key):
        """
        :type key: int
        :rtype: None
        """
        self.set[key] = 0


    def contains(self, key):
        """
        :type key: int
        :rtype: bool
        """
        return self.set[key]
